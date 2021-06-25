import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/analytics'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDXrYu1Qu-98SIxBzj2sekKXeVDlhRgjHc",
    authDomain: "read-it-f4eba.firebaseapp.com",
    projectId: "read-it-f4eba",
    storageBucket: "read-it-f4eba.appspot.com",
    databaseURL:"https://console.firebase.google.com/project/read-it-f4eba/database/read-it-f4eba-default-rtdb/data",
    messagingSenderId: "633185915286",
    appId: "1:633185915286:web:aad7e8717407a81872cdb7",
    measurementId: "G-K3J5Q5WX24",
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var storage = firebase.storage();
// var database = firebase.database();
    var db = firebase.firestore();
export {storage , db, firebase as default};
