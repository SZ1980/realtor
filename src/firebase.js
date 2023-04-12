// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-9nfnxSqxHQhXG4R0jP82_kbvVPSYuXs",
  authDomain: "realtor-clone-react-89004.firebaseapp.com",
  projectId: "realtor-clone-react-89004",
  storageBucket: "realtor-clone-react-89004.appspot.com",
  messagingSenderId: "286236615214",
  appId: "1:286236615214:web:683360914812125e52f5bf",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
