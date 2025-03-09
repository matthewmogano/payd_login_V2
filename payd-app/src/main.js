import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR-zLYEk5sV34RevIlbCeaK4PSc02Y3eI",
    authDomain: "login-14b5b.firebaseapp.com",
    projectId: "login-14b5b",
    storageBucket: "login-14b5b.firebasestorage.app",
    messagingSenderId: "799661397975",
    appId: "1:799661397975:web:624365b79698b8c4dc9d92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log('User signed in as: ', user);
        return user; //Return the signed-in user data
    
      }).catch((error) => {
            console.error('Error signing in with Google:', error);
            throw error;
      });
};