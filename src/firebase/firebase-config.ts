// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBxaMwDKCE3QeA-OTCElnvhOfn36--tijg',
  authDomain: 'net-app-1b121.firebaseapp.com',
  projectId: 'net-app-1b121',
  storageBucket: 'net-app-1b121.appspot.com',
  messagingSenderId: '705250682786',
  appId: '1:705250682786:web:5219d921aab2aa814df4fb',
  measurementId: 'G-VKJNZKETG7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export default app
