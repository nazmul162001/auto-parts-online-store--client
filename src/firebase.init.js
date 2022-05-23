import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzHKvJvjBRRgaBetQT2jtNn-tzhT7AaYA",
  authDomain: "auto-parts-store-6bc80.firebaseapp.com",
  projectId: "auto-parts-store-6bc80",
  storageBucket: "auto-parts-store-6bc80.appspot.com",
  messagingSenderId: "749152675610",
  appId: "1:749152675610:web:6dffa58bdb605f5ceceea3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;