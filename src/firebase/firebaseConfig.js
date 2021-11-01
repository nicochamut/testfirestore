
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0mlug6hcgenmRgp3kUcgosuPVfSHcGNk",
  authDomain: "nichdev-873b1.firebaseapp.com",
  projectId: "nichdev-873b1",
  storageBucket: "nichdev-873b1.appspot.com",
  messagingSenderId: "478152647501",
  appId: "1:478152647501:web:050acbeeba4bd8584b0d04"
  // apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db