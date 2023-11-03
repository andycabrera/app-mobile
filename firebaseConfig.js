
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDytmfvayADC_bF0vvU3F3SrACJYdhTO2A",
    authDomain: "app-firebase-6b464.firebaseapp.com",
    projectId: "app-firebase-6b464",
    storageBucket: "app-firebase-6b464.appspot.com",
    messagingSenderId: "282927881401",
    appId: "1:282927881401:web:98f09cf12d4ace06a34f68",
    measurementId: "G-MG1FHSYJM5"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
