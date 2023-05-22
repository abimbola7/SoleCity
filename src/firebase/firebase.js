import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAzp5P-tXNS7WVT_FV7GVS9OU3zH4Zm1Xw",
  authDomain: "solecity-8f055.firebaseapp.com",
  projectId: "solecity-8f055",
  storageBucket: "solecity-8f055.appspot.com",
  messagingSenderId: "851655562840",
  appId: "1:851655562840:web:29e40ac90e426ef3c69c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);