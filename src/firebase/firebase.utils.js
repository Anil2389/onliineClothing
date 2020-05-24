import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD0mhEPafh_Y9D1ifS27kQx76M1edZySjg",
  authDomain: "clothingdb-a0639.firebaseapp.com",
  databaseURL: "https://clothingdb-a0639.firebaseio.com",
  projectId: "clothingdb-a0639",
  storageBucket: "clothingdb-a0639.appspot.com",
  messagingSenderId: "678146280625",
  appId: "1:678146280625:web:40fabfc531350a90112690",
  measurementId: "G-EJE5M9X7NG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch(error) {
      console.log("error create",error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
