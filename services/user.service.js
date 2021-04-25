const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = class UserService {

    static async createUser({user_name, password, email, role, account, group}) {
        // return false if user email already exists
        let user = await User.query().select('users.*').where('email', '=', email);
        if (user[0]) return false;

        const hashedPassword = await UserService.hashPassword(password);
        user = await User.query().insert({
            user_name,
            email,
            password: hashedPassword,
            role_id: role,
            account_id: account?account:null,
            group_id: group?group:null
        });
        console.log('created');
        return user;
    }

    static async updateUser({id, user_name, password,  role, group}){
        const hashedPassword = await UserService.hashPassword(password);
        const res = await User.query()
            .findById(id)
            .patch({
                user_name,
                password: hashedPassword,
                role_id: role,
                group_id: group?group:null
            });
        return res;
    }

    static async removeUser(id){
        return User.query().deleteById(id);
    }

    static async login(email, password){
        const [user] = await User.query()
            .select('users.*',
                'roles.role AS role',
                'groups.name AS group',
                'accounts.name AS account',
                'photos.url AS photo')
            .where('email', '=', email)
            .innerJoin('roles', 'users.role_id', 'roles.id')
            .innerJoin('accounts', 'users.account_id', 'accounts.id')
            .leftJoin('groups', 'users.group_id', 'groups.id')
            .leftJoin('photos', 'users.id', 'photos.user_id');
        if(!user) return false

        const hasValidPassword = await bcrypt.compare(password, user.password);
        if(!hasValidPassword) return false

        return jwt.sign({
            id: user.id,
            user_name: user.user_name,
            role_id: user.role_id,
            role: user.role,
            account_id: user.account_id,
            account: user.account,
            group_id: user.group_id,
            group: user.group,
            photo: user.photo
        }, process.env.JWT_KEY);
    }

    static async findUserById(id) {
        return User.query().findById(id);
    }

    static async findAllUsers(){
        return User.query();
    }

    static async findGroupUsers(group_id){
        return User.query()
            .select('users.*')
            .where('group_id', '=', group_id);
    }

    static async findAccountUsers(account_id){
        return User.query()
            .select('users.*')
            .where('account_id', '=', account_id);
    }

    static async hashPassword(password){
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

}
