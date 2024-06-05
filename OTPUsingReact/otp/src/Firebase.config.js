// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQTnQ0R5UKT-ik8fv78OXQVyvmt0YW1TU",
    authDomain: "selayni-e0f37.firebaseapp.com",
    projectId: "selayni-e0f37",
    storageBucket: "selayni-e0f37.appspot.com",
    messagingSenderId: "558735539348",
    appId: "1:558735539348:web:a09b12e5d0a8777d24c881",
    measurementId: "G-KB3Z2PSELW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
