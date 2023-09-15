import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCUnPErn8x3qng0HAEle2srOX7ZD04-3WY",
    authDomain: "backend47165.firebaseapp.com",
    projectId: "backend47165",
    storageBucket: "backend47165.appspot.com",
    messagingSenderId: "228823204014",
    appId: "1:228823204014:web:2c990d833fba96231bed3f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)