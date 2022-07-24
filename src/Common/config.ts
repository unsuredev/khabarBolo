import { initializeApp } from "firebase/app";

 const firebaseConfig = {
    apiKey: "AIzaSyD5tVJmCRkjU7ZUCXtFKc-yXBeIlrkykdg",
    authDomain: "khabarbolo-77d4b.firebaseapp.com",
    projectId: "khabarbolo-77d4b",
    storageBucket: "khabarbolo-77d4b.appspot.com",
    messagingSenderId: "792870786224",
    appId: "1:792870786224:web:b09f2b0272c9298efc5775",
    measurementId: "G-N7QNKT6QPV",
  };


  const firebaseapp = initializeApp(firebaseConfig);
  export {firebaseapp ,firebaseConfig}
  
  
