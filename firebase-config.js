/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
import { initializeApp } from "firebase/app";

const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDLBwn_TtYvE_5Q2C5xaHDXMlQGRXtJfOY",
  authDomain: "friendlychat-3a491.firebaseapp.com",
  projectId: "friendlychat-3a491",
  storageBucket: "friendlychat-3a491.appspot.com",
  messagingSenderId: "835589735395",
  appId: "1:835589735395:web:942697e6d7f928890b56d6"
};
const app = initializeApp(config);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}