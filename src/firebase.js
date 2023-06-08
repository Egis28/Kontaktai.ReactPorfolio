import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYokDI8X6Rdauy8BcfYetx5W6ZG833vms",
  authDomain: "kontaktaiporfolio.firebaseapp.com",
  projectId: "kontaktaiporfolio",
  storageBucket: "kontaktaiporfolio.appspot.com",
  messagingSenderId: "425844905295",
  appId: "1:425844905295:web:2b1b0559f028902b74a13a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);