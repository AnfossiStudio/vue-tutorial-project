import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCxxd364nFBoVBc0avKaLq6FLL7wv2ty1E",
  authDomain: "vue-app-tutorial-79d98.firebaseapp.com",
  projectId: "vue-app-tutorial-79d98",
  storageBucket: "vue-app-tutorial-79d98.appspot.com",
  messagingSenderId: "44329424385",
  appId: "1:44329424385:web:73407fc10e6d2054921200"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
