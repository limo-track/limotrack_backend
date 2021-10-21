const UserService = require('../services/user.service');

module.exports = class UserController {

    static async createUser(req, res) {
        const { user_name, email, password, role, account = null, group = null } = req.body;
        const result = await UserService.createUser({ user_name, email, password, role, account, group });
        if (!result) return res.status(400).send('email already exists')
        res.send(result);
    }

    static async login(req, res) {
        const { email, password } = req.body;
        const token = await UserService.login(email, password);

        if (token) return res.send(token);

        return res.status(400).send('Invalid email or password')
    }

    static async updateUser(req, res) {
        const result = await UserService.updateUser(req.body);
        res.send(result);
    }

    static async updateUserPhoto(req, res) {
        const result = await UserService.updateUserName(req.body);
        res.send(result);
    }

    static async changePassword(req, res) {
        const { user_id, password } = req.body;
        const result = await UserService.changePassword(user_id, password);
        res.send(result);
    }

    static async getAllUsers(req, res) {
        const id = req.params.id
        const result = await UserService.findAllUsers(id);
        res.send(result);
    }

    static async removeUsers(req, res) {
        const {ids=[]} = req.body;
        await UserService.removeUsers(ids);
        res.send('removed')
    }


}