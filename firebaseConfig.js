import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0Qt3Ev106TWuJY7XsFtc6aIWeOKNswdM",
  authDomain: "bazapp-6464.firebaseapp.com",
  projectId: "bazapp-6464",
  storageBucket: "bazapp-6464.appspot.com",
  messagingSenderId: "876377053249",
  appId: "1:876377053249:web:c681fded4d4923812dcec0",
  measurementId: "G-YM4BW69W60"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };