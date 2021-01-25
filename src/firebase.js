import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCMHh0Hpxgm7kcIWIjokuiYJgMcIl64QFg',
  authDomain: 'clone-70e7f.firebaseapp.com',
  projectId: 'clone-70e7f',
  storageBucket: 'clone-70e7f.appspot.com',
  messagingSenderId: '1086925516007',
  appId: '1:1086925516007:web:4db68bfbc1fc05e34bc642',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
