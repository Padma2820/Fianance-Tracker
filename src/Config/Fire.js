// import firebase from 'firebase';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC9Ejes4fAjqjI1SkHPg61eC74Rlyqm4Pc",
  authDomain: "personal-expense-tracker-ad4a0.firebaseapp.com",
  projectId: "personal-expense-tracker-ad4a0",
  storageBucket: "personal-expense-tracker-ad4a0.appspot.com",
  messagingSenderId: "774009809534",
  appId: "1:774009809534:web:9a36ae8c60c22a438ac62f"
};
const fire = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, fire as default };
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);