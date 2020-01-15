import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdLAZrHhenedlKpzQFfV-EY0HX_YMZau8",
    authDomain: "whats-for-dinner-revs-6e43b.firebaseapp.com",
    databaseURL: "https://whats-for-dinner-revs-6e43b.firebaseio.com",
    projectId: "whats-for-dinner-revs-6e43b",
    storageBucket: "whats-for-dinner-revs-6e43b.appspot.com",
    messagingSenderId: "212885192255",
    appId: "1:212885192255:web:97b122f91c0c15e3ef028a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
