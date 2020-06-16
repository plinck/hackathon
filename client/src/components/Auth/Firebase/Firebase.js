import * as firebase from 'firebase/app';
import 'firebase/functions';

const FB_CONFIG = {
  API_KEY:process.env.REACT_APP_API_KEY,
  AUTH_DOMAIN:process.env.REACT_APP_AUTH_DOMAIN,
  DATABASE_URL:process.env.REACT_APP_DATABASE_URL,
  PROJECT_ID:process.env.REACT_APP_PROJECT_ID,
  STORAGE_BUCKET:process.env.REACT_APP_STORAGE_BUCKET,
  MESSAGING_SENDER_ID:process.env.REACT_APP_MESSAGING_SENDER_ID,
  APP_ID:process.env.REACT_APP_APP_ID,
  MEASUREMENT_ID:process.env.REACT_APP_MEASUREMENT_ID,
}
const firebaseConfig = {
  apiKey: FB_CONFIG.API_KEY,
  authDomain: FB_CONFIG.AUTH_DOMAIN,
  databaseURL: FB_CONFIG.DATABASE_URL,
  projectId: FB_CONFIG.PROJECT_ID,
  storageBucket: FB_CONFIG.STORAGE_BUCKET,
  messagingSenderId: FB_CONFIG.MESSAGING_SENDER_ID,
  appId: FB_CONFIG.APP_ID,
  measurementId: FB_CONFIG.MEASUREMENT_ID
};


// Firebase state already initialized so we dont do more that once
// Kinda like a statuc property
class Firebase {
  static firebaseInialized = undefined;

  constructor() {
    try {
      if (!this.firebaseInialized) {
        firebase.initializeApp(firebaseConfig);
        this.firebaseInialized = true;
      }
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
      }
    }

    this.functions = firebase.functions();
  }
}

export { Firebase };
