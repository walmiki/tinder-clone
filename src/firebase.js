// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAm97QE4bm4msKRLRusq2Z9Q_YsF2gQXZs",
	authDomain: "tinder-clone-3d4c3.firebaseapp.com",
	databaseURL: "https://tinder-clone-3d4c3.firebaseio.com",
	projectId: "tinder-clone-3d4c3",
	storageBucket: "tinder-clone-3d4c3.appspot.com",
	messagingSenderId: "262987486758",
	appId: "1:262987486758:web:825096cb12378da2aff8e7",
	measurementId: "G-2DT59JDTEW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
