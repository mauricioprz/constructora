
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA8W_D8b_8PWxEbBCkeNj-nDxX5o8KKv-o",
    authDomain: "invie-form-ac243.firebaseapp.com",
    databaseURL: "https://invie-form-ac243.firebaseio.com",
    projectId: "invie-form-ac243",
    storageBucket: "invie-form-ac243.appspot.com",
    appId: "1:891649795371:web:f06ab8c02a49f4eb02516e",
    measurementId: "G-8844M38ENF",
    messagingSenderId: "891649795371"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;