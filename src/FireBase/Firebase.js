import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account", // [OPTIONAL] Set the authentication flow to select_account
});

export { auth, googleProvider, storage };
export default db;
