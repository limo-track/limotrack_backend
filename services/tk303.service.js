const { carsCollection, tk303Collection } = require('../utils/firebase');

module.exports = class TK303Service {
    static async saveRecord(data) {
        // save to firebase TK303 collection
        await tk303Collection.add(data);

        const snapshots = await carsCollection.where('imei', '==', data.imei).get();
        const x = [];
        snapshots.forEach(doc => x.push({ id: doc.id, ...doc.data() }));
        if (x.length === 0) { // insert
            carsCollection.add(data)
        } else { // update
            carsCollection.doc(x[0].id).update(data)
        }
    }

   static async getLastRecord(imei) {
        const cars = await tk303Collection
            .where('imei', '==', imei)
            .where('acc_state', '==', '1')
            .orderBy("time", 'desc')
            .limit(1)
            .get()

        const x = []
        cars.forEach(doc => {
            x.push({id: doc.id, ...doc.data()})
        });
        if(x.length ===0 ) return null
        return x[0];
    }
};