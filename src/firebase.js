import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6LBzewWTnRJXwXYZxNiWy11dVOy4n3ZY",
    authDomain: "netflix-clone-app-test.firebaseapp.com",
    projectId: "netflix-clone-app-test",
    storageBucket: "netflix-clone-app-test.appspot.com",
    messagingSenderId: "224479462371",
    appId: "1:224479462371:web:9e32ad8eb55c2e5a8116d6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth}
export default db