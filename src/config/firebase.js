
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAQbhNFxDR51-t6NHRYsCAR2dghkay_Ljk",
  authDomain: "tiktok---jornada-66ab3.firebaseapp.com",
  projectId: "tiktok---jornada-66ab3",
  storageBucket: "tiktok---jornada-66ab3.appspot.com",
  messagingSenderId: "613484926084",
  appId: "1:613484926084:web:fac04db3d7ad7be9d69ed1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;