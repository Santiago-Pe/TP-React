import firebase from "firebase";
import 'firebase/firestore'


const firebaseConfig = 
{
    apiKey: "AIzaSyCCNzJjx622MNPKih4KFcTqYN2dpTuQ2a0",
    authDomain: "santi-app-e-commerce-react-js.firebaseapp.com",
    projectId: "santi-app-e-commerce-react-js",
    storageBucket: "santi-app-e-commerce-react-js.appspot.com",
    messagingSenderId: "394319657290",
    appId: "1:394319657290:web:73df90773d861591ff69b3"
};

const app = firebase.initializeApp(firebaseConfig);

const getFirestore = () => 
{
    return firebase.firestore(app)
}

export default getFirestore







