import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const authentication = () => {
  initializeApp(firebaseConfig);
};

export default authentication;
