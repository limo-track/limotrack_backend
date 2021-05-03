const Account = require('../models/account');

class AccountServices {

    static async createAccount(name, address, latitude, longitude, contact_person, contact_phone){
        return Account.query().insert({
            name, address, latitude, longitude, contact_person, contact_phone
        });
    }

    static async getAllAccounts() {
        return Account.query().select('id', 'name As account', 'address', 'latitude', 'longitude', 'contact_person', 'contact_phone');
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


}

module.exports = AccountServices;