import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';

const app = firebase.initializeApp({
  apiKey: "AIzaSyA0IpK32h_7CIpoAslwe297-DFTQArqa84",
  authDomain: "onyxcards-431c3.firebaseapp.com",
  projectId: "onyxcards-431c3",
  storageBucket: "onyxcards-431c3.appspot.com",
  messagingSenderId: "528746379678",
  appId: "1:528746379678:web:f3af58f09173d0003d3e8f",
  measurementId: "G-39HJV7B8FB"
})

const firestore = app.firestore()
export const database = {
  decks: firestore.collection('decks'),
  cards: firestore.collection('cards'),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data()}
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app