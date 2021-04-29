import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJLmdlVYw4BbinbkfbU09iyzeUEfSkZ5g",
  authDomain: "crwn-db-a2d35.firebaseapp.com",
  projectId: "crwn-db-a2d35",
  storageBucket: "crwn-db-a2d35.appspot.com",
  messagingSenderId: "886951240618",
  appId: "1:886951240618:web:5a23cf50647b50cb6a41d3"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
