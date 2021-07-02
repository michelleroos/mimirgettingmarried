import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0XSyZ3UKVC3j_x95QZzP-I1yXeSJVpB0",
    authDomain: "gallery-23854.firebaseapp.com",
    projectId: "gallery-23854",
    storageBucket: "gallery-23854.appspot.com",
    messagingSenderId: "332603255830",
    appId: "1:332603255830:web:002fc646e025c703ec9937"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };