import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDcvHL1LCZa7oTMfgA06G6gV8QlYbapYSs",
    authDomain: "smit-batch-11-30658.firebaseapp.com",
    projectId: "smit-batch-11-30658",
    storageBucket: "smit-batch-11-30658.appspot.com",
    messagingSenderId: "964008124175",
    appId: "1:964008124175:web:e96b7d6596ab470b8ee87a",
    measurementId: "G-FC7032XK1V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}
