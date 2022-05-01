// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3n3FaSiNqDnAjfeZ_KepKH7Efq26iRoU",
    authDomain: "todo-app-47834.firebaseapp.com",
    projectId: "todo-app-47834",
    storageBucket: "todo-app-47834.appspot.com",
    messagingSenderId: "812166223447",
    appId: "1:812166223447:web:484794401bcae0bdb77512",
    measurementId: "G-RZ89F5RNYQ"
  });

  const db = firebaseApp.firestore();
  // const auth = firebaseApp.auth();
  export { db };
//   const auth = firebase.auth();