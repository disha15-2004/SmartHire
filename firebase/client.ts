
import { initializeApp , getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDRNE3AMucpMrsQGC9_Q7UhAEmNvflKIYI",
    authDomain: "prepwise-972b0.firebaseapp.com",
    projectId: "prepwise-972b0",
    storageBucket: "prepwise-972b0.firebasestorage.app",
    messagingSenderId: "809216227269",
    appId: "1:809216227269:web:855ee72f8b0fa8428d3dac",
    measurementId: "G-LK35YZTKZD"
};
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);