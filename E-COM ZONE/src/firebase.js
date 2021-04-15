import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-KDlhhfmhfl-dbLcs06J0EELrbU03Wv8",
  authDomain: "testwebproject-817ae.firebaseapp.com",
  projectId: "testwebproject-817ae",
  storageBucket: "testwebproject-817ae.appspot.com",
  messagingSenderId: "364475001620",
  appId: "1:364475001620:web:44d192f02681a911cef001",
  measurementId: "G-H3FKJ87421"
});

const db = firebase.firestore(); 

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
