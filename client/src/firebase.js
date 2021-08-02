import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDpmerS0ETcpoOJaGd4zB7kA2OGNzDkQdg",
  authDomain: "bakarwaal-ecommerce.firebaseapp.com",
  projectId: "bakarwaal-ecommerce",
  storageBucket: "bakarwaal-ecommerce.appspot.com",
  messagingSenderId: "294570519796",
  appId: "1:294570519796:web:3f77a4a560ff6acab902a1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
