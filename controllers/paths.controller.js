const PathServices = require('../services/paths.services');

class PathsController{

    static async getGroupPaths(req, res){
        const group_id = req.params.group_id;
        const result = await PathServices.getGroupPaths(group_id);
        res.send(result);
    }

    static async createPath(req, res){
        const {group_id, name} = req.body;
        const result = await PathServices.createPath(group_id, name);
        res.send(result);
    }

    static async updatePath(req, res){
        const id = req.params.id;
        const name = req.body.name;
        await PathServices.updatePath(id, name);
        res.send('Updated');
    }

    static async removePaths(req, res){
        const {ids=[]} = req.body;
        await PathServices.removePaths(ids);
        res.send('deleted');
    }
}

module.exports=PathsController;