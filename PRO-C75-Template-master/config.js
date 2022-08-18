import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDgahCyVLUBYePef_RobAFvHrcgJjfwDQI",
  authDomain: "project-c71-62db0.firebaseapp.com",
  projectId: "project-c71-62db0",
  storageBucket: "project-c71-62db0.appspot.com",
  messagingSenderId: "342770209073",
  appId: "1:342770209073:web:636d2c2ea525a97c84e010"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
