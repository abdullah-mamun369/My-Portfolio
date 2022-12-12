// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC3qw7Ucejp3ooUbalEnhSrvpYqdf8xOvw",
//   authDomain: "mamunabdullah-d3748.firebaseapp.com",
//   projectId: "mamunabdullah-d3748",
//   storageBucket: "mamunabdullah-d3748.appspot.com",
//   messagingSenderId: "961578764589",
//   appId: "1:961578764589:web:3d6cf48f3236f660ef2ba4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);