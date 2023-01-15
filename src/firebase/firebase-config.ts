// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOOweoKO4L_4RLiyI7yxPX4JWlQA5Yk3o',
  authDomain: 'net-app-96217.firebaseapp.com',
  projectId: 'net-app-96217',
  storageBucket: 'net-app-96217.appspot.com',
  messagingSenderId: '378663349564',
  appId: '1:378663349564:web:159192f3a391c490424239',
  measurementId: 'G-M4K1N604TP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const datebase = getDatabase(app)
export default app
