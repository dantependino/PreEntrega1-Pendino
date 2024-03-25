
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDGrQOSNPogYzgCFUdMm7k2Lqp4NdMsB9U",
  authDomain: "reacecomerce.firebaseapp.com",
  projectId: "reacecomerce",
  storageBucket: "reacecomerce.appspot.com",
  messagingSenderId: "15989606909",
  appId: "1:15989606909:web:09dffd3fd1c66ed88e7194"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)