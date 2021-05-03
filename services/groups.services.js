const Group = require('../models/group');

class GroupsServices {

    static getGroupsByAccount(account_id) {
        return Group.query()
            .select('groups.*')
            .where('account_id', '=', account_id);
    }

    static async createGroup(account_id, name, address, latitude, longitude, contact_person, contact_phone){
        return Group.query().insert({
            account_id, name, address, latitude, longitude, contact_person, contact_phone
        });
    }

    static async updateGroup(id, name, address, latitude, longitude, contact_person, contact_phone){
        const res = await Group.query()
            .findById(id)
            .patch({
                name, address, latitude, longitude, contact_person, contact_phone
            });
        return res.toString();
    }

    static removeGroups(ids){
        return Group.query().delete().whereIn('id', ids);
    }




}

module.exports = GroupsServices;