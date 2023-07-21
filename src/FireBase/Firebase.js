import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD68ZgkOrtrKqyHafQb1lCT0E9xDFu3_XU",
  authDomain: "disneyplus-clone-db312.firebaseapp.com",
  projectId: "disneyplus-clone-db312",
  storageBucket: "disneyplus-clone-db312.appspot.com",
  messagingSenderId: "84819969656",
  appId: "1:84819969656:web:c0cc270840e8f6bf6a4f8d",
  measurementId: "G-38KYSP3CKD",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
