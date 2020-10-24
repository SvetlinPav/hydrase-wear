import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtQ07ExpH1tVqssaBDLeHl5sSp6FEu16E",
    authDomain: "hydrasewear-db.firebaseapp.com",
    databaseURL: "https://hydrasewear-db.firebaseio.com",
    projectId: "hydrasewear-db",
    storageBucket: "hydrasewear-db.appspot.com",
    messagingSenderId: "740653310772",
    appId: "1:740653310772:web:620aadd49138aaaafb7b61",
    measurementId: "G-FN0NSRGFY9"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

    if (!snapShot.exists) {
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
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;