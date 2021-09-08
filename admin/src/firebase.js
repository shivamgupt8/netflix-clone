import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyBGbk5AW0OLUC34CQ2l87TUeJwq0R9lAI4",

  authDomain: "nfclone-aa134.firebaseapp.com",

  projectId: "nfclone-aa134",

  storageBucket: "nfclone-aa134.appspot.com",

  messagingSenderId: "435739874035",

  appId: "1:435739874035:web:2265669482673e0dd41d86",

  measurementId: "G-LTMW2XK08E"

};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
