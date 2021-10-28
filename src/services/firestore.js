import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByKzqtzbUwVJfNqCLy3_7BJdCKP1VAOug",
    authDomain: "e-commerce-project-f7efb.firebaseapp.com",
    projectId: "e-commerce-project-f7efb",
    storageBucket: "e-commerce-project-f7efb.appspot.com",
    messagingSenderId: "674359680238",
    appId: "1:674359680238:web:1aec568758f96b4ab5a7ff",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
