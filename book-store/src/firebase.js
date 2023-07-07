import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBEuvPd-6WdIlIf0d806jRurz_3haf5OCs",
    authDomain: "book-store-fe353.firebaseapp.com",
    projectId: "book-store-fe353",
    storageBucket: "book-store-fe353.appspot.com",
    messagingSenderId: "768649052973",
    appId: "1:768649052973:web:0af2b4e4840c7ea89549a4",
    measurementId: "G-RZJKZHPSCH",
    databaseURL: "https://book-store-fe353-default-rtdb.firebaseio.com",
  };

  export const app = initializeApp(firebaseConfig);