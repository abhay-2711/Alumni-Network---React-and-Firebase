import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA4JS4dRmEzOcPEJb0ksAHU5fwpUgF9u9I",
    authDomain: "alumni-network-5ebad.firebaseapp.com",
    projectId: "alumni-network-5ebad",
    storageBucket: "alumni-network-5ebad.appspot.com",
    messagingSenderId: "59971655700",
    appId: "1:59971655700:web:14e6baf5f3ab67a0312f01"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth,provider,storage};
  export default db;

