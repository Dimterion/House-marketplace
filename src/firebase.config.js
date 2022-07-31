import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAafKLz1RxqECKZVJXJE1ZZidL5fFP2eW0",
  authDomain: "house-marketplace-app-a78b2.firebaseapp.com",
  projectId: "house-marketplace-app-a78b2",
  storageBucket: "house-marketplace-app-a78b2.appspot.com",
  messagingSenderId: "771818061202",
  appId: "1:771818061202:web:4f97f6932df13af370554b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
