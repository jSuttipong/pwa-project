import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  // apiKey: 'AIzaSyCe6CSzOUs6_Ij_VHa6hancdEi6CNBtw7c',
  // authDomain: 'bento-starter.firebaseapp.com',
  // databaseURL: 'https://bento-starter.firebaseio.com',
  // projectId: 'bento-starter',
  // storageBucket: 'bento-starter.appspot.com',
  // messagingSenderId: '458464977217'
  apiKey: "AIzaSyDNuZjAbBO7qPjnaOBaUXr4cXi-fT-JQq0",
  authDomain: "pwa-project-462c4.firebaseapp.com",
  databaseURL: "https://pwa-project-462c4.firebaseio.com",
  projectId: "pwa-project-462c4",
  storageBucket: "pwa-project-462c4.appspot.com",
  messagingSenderId: "118594392459",
  appId: "1:118594392459:web:9b2bf222bca04edac11f8e",
  measurementId: "G-R7G0WCKFM2"
}

firebase.initializeApp(config)
