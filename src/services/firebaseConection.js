import firebase from "firebase/app";
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDCSLQDaYtRCrnlGbwlnuQ6VD7uTSdyP4k",
    authDomain: "chamados-4c694.firebaseapp.com",
    projectId: "chamados-4c694",
    storageBucket: "chamados-4c694.appspot.com",
    messagingSenderId: "238262498712",
    appId: "1:238262498712:web:395ba0c216c17b6d9e27ed",
    measurementId: "G-VYT2P1Y944"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  