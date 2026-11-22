
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewbit-45928.firebaseapp.com",
  projectId: "interviewbit-45928",
  storageBucket: "interviewbit-45928.firebasestorage.app",
  messagingSenderId: "1063947338180",
  appId: "1:1063947338180:web:72007306f06d1633b66491"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}