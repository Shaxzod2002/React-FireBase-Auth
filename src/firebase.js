// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh2YHGHWJmyj7HK885gEbuWEFx4kxTDG4",
  authDomain: "fir-auth-yt-606aa.firebaseapp.com",
  projectId: "fir-auth-yt-606aa",
  storageBucket: "fir-auth-yt-606aa.appspot.com",
  messagingSenderId: "886376128239",
  appId: "1:886376128239:web:b3fd52d62b5201f015451a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)
export default app;