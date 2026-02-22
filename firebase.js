import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK7hHV_2R68asLFXJI_4lvfhdlAy2AqCQ",
  authDomain: "confessions-e9025.firebaseapp.com",
  projectId: "confessions-e9025",
  storageBucket: "confessions-e9025.firebasestorage.app",
  messagingSenderId: "379691105533",
  appId: "1:379691105533:web:ea8386385742b6dea39294"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
