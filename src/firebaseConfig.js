// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmDEZbCI_I-tORdoydOS1pekqwSqVzxks",
    authDomain: "corport-b0a6b.firebaseapp.com",
    projectId: "corport-b0a6b",
    storageBucket: "corport-b0a6b.appspot.com",
    messagingSenderId: "765083355172",
    appId: "1:765083355172:web:4947433ac60fd438f830b1",
    measurementId: "G-KHZHQT8FBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
