import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBAa-T1hJoUisaNeS7HX5KP41mMwClqEGY',
  authDomain: 'music-85f7d.firebaseapp.com',
  projectId: 'music-85f7d',
  storageBucket: 'music-85f7d.appspot.com',
  appId: '1:930092045201:web:206f6452a556296c85c030',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
