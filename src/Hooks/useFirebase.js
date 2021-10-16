import { useEffect, useState } from "react";
import authentication from "../Firebase/firebase.init";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

authentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth).then((result) => {
      setUser({});
    });
  };

  return {
    user,
    logOut,
    googleSignin,
  };
};

export default useFirebase;
