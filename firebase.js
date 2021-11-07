// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzeFisGhrToYwJHumwk5mZt8Fbk6m33ao",  
    authDomain: "notefoss.firebaseapp.com",  
    projectId: "notefoss",  
    storageBucket: "notefoss.appspot.com",  
    messagingSenderId: "18690787444",  
    appId: "1:18690787444:web:97bd41945667211aa62921"  
  };
// Initialize Firebase

// if(!firebase.apps.length){
//   firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings({ experimentalForceLongPolling: true });  // LINHA ADICIONADA
//   //const database = firebase.firestore();
// }
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const database = firebase.firestore();

export default database;