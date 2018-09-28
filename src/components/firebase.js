import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBo_LS8RDwsReDPrKQU0RUniYXCvPMSSRY",
    authDomain: "who-wants-to-be-a-millio-d8311.firebaseapp.com",
    databaseURL: "https://who-wants-to-be-a-millio-d8311.firebaseio.com",
    projectId: "who-wants-to-be-a-millio-d8311",
    storageBucket: "who-wants-to-be-a-millio-d8311.appspot.com",
    messagingSenderId: "948613848004"
};
firebase.initializeApp(config);
export default firebase;