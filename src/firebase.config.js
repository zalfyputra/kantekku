import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_JLj92NMSj8Z2lt0RDJX3QoyM9cym7Xg",
  authDomain: "kantekku-c81cc.firebaseapp.com",
  databaseURL: "https://kantekku-c81cc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kantekku-c81cc",
  storageBucket: "kantekku-c81cc.appspot.com",
  messagingSenderId: "327086163049",
  appId: "1:327086163049:web:b8841aef295c2285128ef8"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, firestore, storage, firebaseAuth, provider };