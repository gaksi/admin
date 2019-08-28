import { initializeApp } from 'firebase'
import 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyAtwEqlUyKsrPgglAtcruARJnnC7I3I-YU',
  authDomain: 'admin-8869c.firebaseapp.com',
  databaseURL: 'https://admin-8869c.firebaseio.com',
  projectId: 'admin-8869c',
  storageBucket: 'admin-8869c.appspot.com',
  messagingSenderId: '969266901334',
  appId: '1:969266901334:web:69996e465e16be69'
})
export const db = app.firestore()
