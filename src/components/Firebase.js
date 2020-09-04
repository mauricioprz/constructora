
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDCIYmja1ZWXF07z0McVEmaNA5xjEOzf98",
    authDomain: "contact-form-14ce7.firebaseapp.com",
    databaseURL: "https://contact-form-14ce7.firebaseio.com",
    projectId: "contact-form-14ce7",
    storageBucket: "contact-form-14ce7.appspot.com",
    messagingSenderId: "523593956492",
    appId: "1:523593956492:web:ddc7da8b223de514818fa9",
    measurementId: "G-DK4BDNYL5E"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;