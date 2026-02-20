import { getDatabase, ref, push, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBs_gSL0wIaVka89MLGfboNlIoQe-inSlM",
  authDomain:"bbjd-db.firebaseapp.com",
  projectId: "bbjd-db",
  databaseURL: "https://bbjd-db-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "bbjd-db.firebasestorage.app",
  messagingSenderId:"1072379463494",
  appId: "1:1072379463494:web:6031efb08c2a19698ec747",
  measurementId: "G-6SC73DL76T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

export { app, db };