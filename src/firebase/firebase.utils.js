import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyCMqUy9O68ir1xts0uGj4RnB6RS0bTymNE",
    authDomain: "ecommercereact-956a4.firebaseapp.com",
    databaseURL: "https://ecommercereact-956a4.firebaseio.com",
    projectId: "ecommercereact-956a4",
    storageBucket: "ecommercereact-956a4.appspot.com",
    messagingSenderId: "662790560822",
    appId: "1:662790560822:web:7ecd485d83fbfd9ae34c97",
    measurementId: "G-PBXTDGCXZ2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;