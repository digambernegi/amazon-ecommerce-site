import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLFKAbFXvizOpTvNZhOA_RfLw7lz4DJoQ",
  authDomain: "e-commerce-d715f.firebaseapp.com",
  projectId: "e-commerce-d715f",
  storageBucket: "e-commerce-d715f.appspot.com",
  messagingSenderId: "229156167313",
  appId: "1:229156167313:web:b258b82e039e30a587a930",
  measurementId: "G-SK5L048244"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;