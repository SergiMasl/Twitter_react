// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3wqVMkwQ960W9a1Wm4T9BdTV1s_24UiQ",
  authDomain: "twitter-replica-40982.firebaseapp.com",
  projectId: "twitter-replica-40982",
  storageBucket: "twitter-replica-40982.appspot.com",
  messagingSenderId: "101928110457",
  appId: "1:101928110457:web:bb636c92086746a14cc7a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
