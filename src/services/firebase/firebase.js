
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBjy8YEwQDarX3bZev8ibnj1_ZbdEChwS0",
    authDomain: "backend47165-7bbdb.firebaseapp.com",
    projectId: "backend47165-7bbdb",
    storageBucket: "backend47165-7bbdb.appspot.com",
    messagingSenderId: "1062284102265",
    appId: "1:1062284102265:web:c0acf72caf57b4b2c062a8"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)