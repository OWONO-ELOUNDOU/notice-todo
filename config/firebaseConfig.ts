// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCsvY7jrLzirvKeV50QNszLay7rWk31oo",
  authDomain: "reactnative-todo-app-2bdbb.firebaseapp.com",
  projectId: "reactnative-todo-app-2bdbb",
  storageBucket: "reactnative-todo-app-2bdbb.firebasestorage.app",
  messagingSenderId: "856300083903",
  appId: "1:856300083903:web:c90b66a24f7a241bf5840a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const firestoreDB = getFirestore(app);