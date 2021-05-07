const Path = require('../models/path');

class PathsServices {
    static  getGroupPaths(group_id){
        return Path.query().select().where('group_id', '=', group_id);
    }

    static async createPath(group_id, name){
        await Path.query().insert({name, group_id});
    }

    static async updatePath(id, name){
        await Path.query().findById(id).patch({name});
    }

    static async removePaths(ids){
        return Path.query().delete().whereIn('id', ids);
    }

}

module.exports = PathsServices;