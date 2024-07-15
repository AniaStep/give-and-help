import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDM2bW3mC3zO1m-61NagwNOv6ezOZe5nmw",
    authDomain: "give-and-help.firebaseapp.com",
    projectId: "give-and-help",
    storageBucket: "give-and-help.appspot.com",
    messagingSenderId: "806463970165",
    appId: "1:806463970165:web:ca922d4bcb0e90d38e113c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);