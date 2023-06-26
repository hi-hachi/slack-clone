import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyDSgCupHWSTV7t4G7PFjca8ZckqkSvsq7o",
    authDomain: "slack-clone-604c7.firebaseapp.com",
    projectId: "slack-clone-604c7",
    storageBucket: "slack-clone-604c7.appspot.com",
    messagingSenderId: "31238204585",
    appId: "1:31238204585:web:e75a7c1b68698a66714db8"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default db;