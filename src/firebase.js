import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

//connecting my project with the firebase API
const app = firebase.initializeApp({
  apiKey: "AIzaSyA0IpK32h_7CIpoAslwe297-DFTQArqa84",
  authDomain: "onyxcards-431c3.firebaseapp.com",
  projectId: "onyxcards-431c3",
  storageBucket: "onyxcards-431c3.appspot.com",
  messagingSenderId: "528746379678",
  appId: "1:528746379678:web:f3af58f09173d0003d3e8f",
  measurementId: "G-39HJV7B8FB"
})
 
//function to utilise firebase's database functions
const firestore = app.firestore()

//function used to specifically reference the decks and cards collections in the firestore database
export const database = {
  decks: firestore.collection('decks'),
  cards: firestore.collection('cards'),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data()}
  },
  //function to get time of creation of card/deck
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
//firebase authentication function
export const auth = app.auth()
export default app