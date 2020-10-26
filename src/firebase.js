import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtdhM7BVNVIihNXkBHQW4ixYlPbXF2JFU',
  authDomain: 'compras-36689.firebaseapp.com',
  databaseURL: 'https://compras-36689.firebaseio.com',
  projectId: 'compras-36689',
  storageBucket: 'compras-36689.appspot.com',
  messagingSenderId: '277254306057',
  appId: '1:277254306057:web:0c103c14b3839b643a7bd8',
  measurementId: 'G-J9R0XTS258',

};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line import/prefer-default-export
export const db = fb.firestore();
