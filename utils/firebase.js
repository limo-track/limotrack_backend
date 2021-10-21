const firebase = require('firebase/app');
require('firebase/firestore')
    // got from app settings on firebase
const firebaseConfig = {
    apiKey: "AIzaSyB9xaxIpIXq7KdBxdBEkDiqGk6R2B7aLSE",
    authDomain: "test-59372.firebaseapp.com",
    projectId: "test-59372",
    storageBucket: "test-59372.appspot.com",
    messagingSenderId: "24501278822",
    appId: "1:24501278822:web:f39c7254de0a8e48fdb5a7",
    measurementId: "G-CB8QNDFKC4"
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