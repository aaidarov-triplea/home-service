import { initializeApp } from "firebase/app"
import {getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCnplXAUEuoAxNUXQtQK58cXl8bc7HoGNw",
    authDomain: "home-service-ba470.firebaseapp.com",
    databaseURL: "https://home-service-ba470-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "home-service-ba470",
    storageBucket: "home-service-ba470.appspot.com",
    messagingSenderId: "494109857579",
    appId: "1:494109857579:web:0c36ea067974caafc0d76e"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)