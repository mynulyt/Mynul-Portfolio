import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLZbf3iLv2jqAI8wrDDLJSRe4Ef-hhUn4",
  authDomain: "fooddeliveryapp-d2619.firebaseapp.com",
  projectId: "fooddeliveryapp-d2619",
  storageBucket: "fooddeliveryapp-d2619.appspot.com",
  messagingSenderId: "595630345582",
  appId: "1:595630345582:web:b497e2aeb4d5f4fd3ac57f",
  measurementId: "G-KGDNQYNJLS"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
