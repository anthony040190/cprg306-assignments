// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcidp51EyNKRVkAP-Yb_SoZ_4CNGpkbfU",
  authDomain: "cprg306-assignments-12309.firebaseapp.com",
  projectId: "cprg306-assignments-12309",
  storageBucket: "cprg306-assignments-12309.appspot.com",
  messagingSenderId: "730311853656",
  appId: "1:730311853656:web:b51bdcd03a7984f1d2ec2d"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
