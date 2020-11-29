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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`error`, error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
