import { initializeApp } from  "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB1bvrdEZHpULgn-JqFWGoZgKzkk7aZY2k",
  authDomain: "qutter-5d448.firebaseapp.com",
  projectId: "qutter-5d448",
  storageBucket: "qutter-5d448.appspot.com",
  messagingSenderId: "873128728738",
  appId: "1:873128728738:web:b19ef95a68b1bb7dac9ffb"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore();

export default db