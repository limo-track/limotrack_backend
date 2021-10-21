const PathHistory = require('../models/pathHistory');

class PathHistoryServices {
    static async changePath(car_id, path_id){
        // get last record where end date is null
        const [last] = await PathHistory
            .query()
            .select()
            .whereNull('end_date')
            .where('car_id', '=', car_id);
        if(!last){
        }
        // set end_date to current date
        // create a new record with start date eq today and end date is null

    }

}

module.exports = PathHistoryServices;