// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYguqCEvqRJFmfvn0cP17sx1eros27duM",
    authDomain: "ema-john-auth-1b813.firebaseapp.com",
    projectId: "ema-john-auth-1b813",
    storageBucket: "ema-john-auth-1b813.appspot.com",
    messagingSenderId: "432170788974",
    appId: "1:432170788974:web:5e5c8f9c061ad365399e7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;