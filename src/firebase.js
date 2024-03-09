// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBl4Mc7cX3rUZJ7XCB4oKeYZZv95Fat6R8",
  authDomain: "apps-b958a.firebaseapp.com",
  projectId: "apps-b958a",
  storageBucket: "apps-b958a.appspot.com",
  messagingSenderId: "845710736610",
  appId: "1:845710736610:web:e6a3248bbe8e2e8bd9b2bb",
  databaseURL:"https://console.firebase.google.com/project/apps-b958a/database/apps-b958a-default-rtdb/data/~2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};