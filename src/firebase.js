// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnm7sOZJJByF5D_pK_8-YAILXa-YdoGIY",
    authDomain: "userdata-cf724.firebaseapp.com",
    projectId: "userdata-cf724",
    storageBucket: "userdata-cf724.appspot.com",
    messagingSenderId: "120437214769",
    appId: "1:120437214769:web:06a79e9e22fbadf4accf10"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 