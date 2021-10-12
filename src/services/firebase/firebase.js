import * as firebase from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDbN9nt5pkxIIcR8UtaXIhsVd_AyDscm70",
    authDomain: "react-carrito-5d4ca.firebaseapp.com",
    projectId: "react-carrito-5d4ca",
    storageBucket: "react-carrito-5d4ca.appspot.com",
    messagingSenderId: "130472131567",
    appId: "1:130472131567:web:de9994a0e0e40e0abe141a"
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)