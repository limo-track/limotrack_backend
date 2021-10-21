const firebase = require('firebase/app');
require('firebase/firestore')
    // got from app settings on firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_apiKey,
    authDomain: process.env.FIREBASE_authDomain,
    projectId: process.env.FIREBASE_projectId,
    storageBucket: process.env.FIREBASE_storageBucket,
    messagingSenderId: process.env.FIREBASE_messagingSenderId,
    appId: process.env.FIREBASE_appId,
    measurementId: process.env.FIREBASE_measurementId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


//db.collection('tk303').get('9iEWXvacfPvFQuUHaQTD').then(x => console.log(x.doc.data()))

const carsCollection = db.collection('cars');
const tk303Collection = db.collection('TK303');
const tk103Collection = db.collection('TK103');

module.exports = {
    carsCollection,
    tk303Collection,
    tk103Collection
}