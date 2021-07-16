// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAU2t0Rw0s2pDMWcM4gv0Lx3RaLJ_XeiKM",
  authDomain: "challenge-14688.firebaseapp.com",
  projectId: "challenge-14688",
  storageBucket: "challenge-14688.appspot.com",
  messagingSenderId: "691285937342",
  appId: "1:691285937342:web:f837ca141cd253838162ef",
  measurementId: "G-3YBC9Y99TZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth};