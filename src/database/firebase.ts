import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD_n5_xrvSlwcrXei_FQMSlx4iYLyJzVqA",
  authDomain: "utak-menu.firebaseapp.com",
  databaseURL: "https://utak-menu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "utak-menu",
  storageBucket: "utak-menu.appspot.com",
  messagingSenderId: "411533428267",
  appId: "1:411533428267:web:f64a9e7a17c69f8f914c6e",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);