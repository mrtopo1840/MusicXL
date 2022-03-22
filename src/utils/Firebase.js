import firebase from "firebase/compat/app";

// Configuracion de Firebase que nos da la pagina
const firebaseConfig = {
  apiKey: "AIzaSyBn2HC6IU6lui4hF7ikpxMU772Bjabwkrs",
  authDomain: "music-xl.firebaseapp.com",
  projectId: "music-xl",
  storageBucket: "music-xl.appspot.com",
  messagingSenderId: "921470236431",
  appId: "1:921470236431:web:959ff46d8b10b91a29307a",
};

export default firebase.initializeApp(firebaseConfig);
