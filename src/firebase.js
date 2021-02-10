import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD17-Ek5No15srZwq0JDbmOjJo6rupcKbg",
    authDomain: "linkedin-clone-yt-b7130.firebaseapp.com",
    projectId: "linkedin-clone-yt-b7130",
    storageBucket: "linkedin-clone-yt-b7130.appspot.com",
    messagingSenderId: "1072942493537",
    appId: "1:1072942493537:web:e811070975874e72059f20"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };