// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEkE9sZoqhf9BfSeo6shWauk5eAWrlV3w",
  authDomain: "b9a11-fitness-client-2c51c.firebaseapp.com",
  projectId: "b9a11-fitness-client-2c51c",
  storageBucket: "b9a11-fitness-client-2c51c.appspot.com",
  messagingSenderId: "143445805166",
  appId: "1:143445805166:web:d4ec30fa7d62c73165be7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;