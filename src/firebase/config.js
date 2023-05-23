import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCaEMoTv3tqGNeIB-obtU73BgkUGK0XGHE",
  authDomain: "create-new-app-fadab.firebaseapp.com",
  databaseURL: "https://create-new-app-fadab-default-rtdb.firebaseio.com",
  projectId: "create-new-app-fadab",
  storageBucket: "create-new-app-fadab.appspot.com",
  messagingSenderId: "499594293277",
  appId: "1:499594293277:web:ab40933bc6d8d1ad7c96f4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };