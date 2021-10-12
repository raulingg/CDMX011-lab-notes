import firebase from 'firebase/app';


import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyATPXacaiw9m0O1sQyHWU_68MpYMHd1rGU",
  authDomain: "lab-notes-ab153.firebaseapp.com",
  projectId: "lab-notes-ab153",
  storageBucket: "lab-notes-ab153.appspot.com",
  messagingSenderId: "612033220624",
  appId: "1:612033220624:web:4cd1fa6b49871451baba95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export {
    db,
    auth,
    googleAuthProvider,
    firebase
}