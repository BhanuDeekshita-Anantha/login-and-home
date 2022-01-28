import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAKEXVKyLpw6TqEEiQr8sgXh16J0gIPo14",
  authDomain: "login-7b3b3.firebaseapp.com",
  projectId: "login-7b3b3",
  storageBucket: "login-7b3b3.appspot.com",
  messagingSenderId: "1085430823371",
  appId: "1:1085430823371:web:78f7b3d2f5e2177d721e4e"
};
const app = initializeApp(firebaseConfig);

 export const auth=getAuth(app)