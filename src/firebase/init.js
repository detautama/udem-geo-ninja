import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDd8hG9VvAU7PM51kVQ0SYr8WipumvP9eE",
  authDomain: "udemy-geo-ninja-ea6c3.firebaseapp.com",
  databaseURL: "https://udemy-geo-ninja-ea6c3.firebaseio.com",
  projectId: "udemy-geo-ninja-ea6c3",
  storageBucket: "udemy-geo-ninja-ea6c3.appspot.com",
  messagingSenderId: "577874777320"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()