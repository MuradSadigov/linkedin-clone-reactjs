import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLhAZJKtPOYReyMyyyd2Xxoig3H3tGInk",
  authDomain: "linkedin-clone-8d3f8.firebaseapp.com",
  projectId: "linkedin-clone-8d3f8",
  storageBucket: "linkedin-clone-8d3f8.appspot.com",
  messagingSenderId: "767266413961",
  appId: "1:767266413961:web:f14bfb1226fdccb5b99558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, app, db };
