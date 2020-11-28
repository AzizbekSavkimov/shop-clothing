import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnyBapEC7SzDuWY0_SC8Upp8rnyPdeZ_E",
    authDomain: "clothing-db-4229d.firebaseapp.com",
    databaseURL: "https://clothing-db-4229d.firebaseio.com",
    projectId: "clothing-db-4229d",
    storageBucket: "clothing-db-4229d.appspot.com",
    messagingSenderId: "878263568916",
    appId: "1:878263568916:web:9004ac51e65e128246f501",
    measurementId: "G-W03B90LV9M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
