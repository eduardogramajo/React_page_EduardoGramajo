import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDl6dKl8LMn1Sm56vRKoTTTMwTpVgr4O08",
    authDomain: "alchemist-store.firebaseapp.com",
    projectId: "alchemist-store",
    storageBucket: "alchemist-store.appspot.com",
    messagingSenderId: "334572596646",
    appId: "1:334572596646:web:31103a717bfd82f2c0f367"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
      return firebase.firestore(app)
  }

  export function formatDate(date) {
    return firebase.firestore.Timestamp.fromDate(date)
  }