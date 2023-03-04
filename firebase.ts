import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuZy2E0k2YE3Qj9PhSxTqzbBvzY3aVoII",
  authDomain: "linkedin-clone-ab705.firebaseapp.com",
  projectId: "linkedin-clone-ab705",
  storageBucket: "linkedin-clone-ab705.appspot.com",
  messagingSenderId: "718903849400",
  appId: "1:718903849400:web:3bc08382f9b56a226d9f4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export {auth, app};