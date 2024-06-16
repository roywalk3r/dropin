// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHZ4Q88zVFFCy6G1r_awiJo4rRuoIi0jM",
  authDomain: "dropin-9a73f.firebaseapp.com",
  projectId: "dropin-9a73f",
  storageBucket: "dropin-9a73f.appspot.com",
  messagingSenderId: "451175150106",
  appId: "1:451175150106:web:061668873ce6962c0c57a3",
  measurementId: "G-6WTZK7ZG8C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
