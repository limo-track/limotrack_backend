const Account = require('../models/account');
const Car = require('../models/car');

class AccountServices {

    static async createAccount(name, address, latitude, longitude, contact_person, contact_phone){
        return Account.query().insert({
            name, address, latitude, longitude, contact_person, contact_phone
        });
    }

    static async getAllAccounts() {
        return Account.query().select('id', 'name As account', 'address', 'latitude', 'longitude', 'contact_person', 'contact_phone');
    }

    static getAccountByID(id){
        return Account.query().findById(id);
    }

    static async getCounts(){
        const count = await  Account.query().count('id AS accounts');
        return count[0]
    }

    static async updateAccount(id, name, address, latitude, longitude, contact_person, contact_phone){
        const res = await Account.query()
            .findById(id)
            .patch({
                name, address, latitude, longitude, contact_person, contact_phone
            });
        return res.toString();
    }

    static removeAccounts(ids){
        return Account.query().delete().whereIn('id', ids);
    }

    static async getDevicesPerAccount(){
        return Car.query()
            .select('accounts.name')
            .count('cars.imei AS device')
            .innerJoin('groups', 'cars.group_id', 'groups.id')
            .innerJoin('accounts', 'groups.account_id', 'accounts.id')
            .groupBy('accounts.name');

    }


}

module.exports = AccountServices;