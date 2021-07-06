import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBhGSQzvDNKSOvJHl51IHCer4ifJlaTDD8',
  authDomain: 'zamin-clothing-db.firebaseapp.com',
  projectId: 'zamin-clothing-db',
  storageBucket: 'zamin-clothing-db.appspot.com',
  messagingSenderId: '141100391947',
  appId: '1:141100391947:web:381c6d7d05457524a2b10e',
  measurementId: 'G-HHY6K17PCC',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promp: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase