import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAsTyO7g93DnHw_KxbdlmwfXw4-f3zgo2Q",
    authDomain: "linkedin-clone-952a4.firebaseapp.com",
    projectId: "linkedin-clone-952a4",
    storageBucket: "linkedin-clone-952a4.appspot.com",
    messagingSenderId: "1038421786449",
    appId: "1:1038421786449:web:c7d4f7d8c51b9cdf5e1d70"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};