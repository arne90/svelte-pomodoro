import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyAPxDkhO7kDj3F01JKDnDoqarvWd9bncZ4",
  authDomain: "aroos-svelte-pomodoro.firebaseapp.com",
  projectId: "aroos-svelte-pomodoro",
  storageBucket: "aroos-svelte-pomodoro.appspot.com",
  messagingSenderId: "245028512311",
  appId: "1:245028512311:web:cb8c81b2202132db9595b2",
  measurementId: "G-PR61EY4W2K"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();