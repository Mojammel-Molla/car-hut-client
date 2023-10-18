// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBz2I56HGhXXY32_X35A2I6Rj3eNTtzSj0',
  authDomain: 'car-hut-d5331.firebaseapp.com',
  projectId: 'car-hut-d5331',
  storageBucket: 'car-hut-d5331.appspot.com',
  messagingSenderId: '395640021573',
  appId: '1:395640021573:web:e2d5b2b05363bb2054792c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
