import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "onoff-clone.firebaseapp.com",
  projectId: "onoff-clone",
  storageBucket: "onoff-clone.appspot.com",
  messagingSenderId: "486915207109",
  appId: "1:486915207109:web:f9f9d025bf64ed375ca5ac",
  measurementId: "G-1BW2G64CJB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export { storage };
export const db = getFirestore();
