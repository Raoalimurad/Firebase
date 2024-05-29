
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged,signOut , sendEmailVerification} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDQTnQ0R5UKT-ik8fv78OXQVyvmt0YW1TU",
    authDomain: "selayni-e0f37.firebaseapp.com",
    projectId: "selayni-e0f37",
    storageBucket: "selayni-e0f37.appspot.com",
    messagingSenderId: "558735539348",
    appId: "1:558735539348:web:a09b12e5d0a8777d24c881",
    measurementId: "G-KB3Z2PSELW"
  };

  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth(app);

  export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,
    onAuthStateChanged,
    signOut ,
    sendEmailVerification

  }