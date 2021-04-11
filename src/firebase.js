import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSlrSj6-zY9zwnrQCpky8cxUaLbDLio4U",
    authDomain: "clone-7d221.firebaseapp.com",
    projectId: "clone-7d221",
    storageBucket: "clone-7d221.appspot.com",
    messagingSenderId: "118174466646",
    appId: "1:118174466646:web:540161aca8a4edd57d71f7",
    measurementId: "G-HGZ3EFGL90"
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db,provider,auth};