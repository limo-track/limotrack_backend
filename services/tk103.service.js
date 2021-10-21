const { tk103Collection, carsCollection } = require('../utils/firebase');

module.exports = class TK103Service {
    static async saveRecord(data) {
        // save to firebase TK103 collection
        await tk103Collection.add(data);

        const snapshots = await carsCollection.where('imei', '==', data.imei).get();
        const x = [];
        snapshots.forEach(doc => x.push({ id: doc.id, ...doc.data() }));
        if (x.length === 0) { // insert
            await carsCollection.add(data)
        } else { // update
            await carsCollection.doc(x[0].id).update(data)
        }
    }
};