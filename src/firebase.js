import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5Eh-ED9rzCS8BwbZau3GeMnFi42PfvDs",
  authDomain: "navsanjeevan-a90ea.firebaseapp.com",
  projectId: "navsanjeevan-a90ea",
  storageBucket: "navsanjeevan-a90ea.appspot.com",
  messagingSenderId: "80286700251",
  appId: "1:80286700251:web:3f207454ae99c00c5172fe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(app);
export const firestore = getFirestore(app);
