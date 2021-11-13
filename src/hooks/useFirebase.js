import { useEffect, useState } from "react";
import initializeFirebase from "../pages/authentication/Firebase/firebase.init";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();
  const [admin, setAdmin] = useState(false);

  const registerUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUserToDatabase(email, name, "PUT");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        history.push("/");

        updateProfile(auth.currentUser, {
          displayName: { userName: name },
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            setError(error);
            // ...
          });

        // Signed in
        const user = userCredential.user;

        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;

        setError(error.message);
        // ..
      })
      .finally(() => setLoading(false));
  };
  const loginUser = (email, password, location, history) => {
    setLoading(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location.state.from || "/";
        history.replace(destination);
        // Signed in
        const user = userCredential.user;
        setError("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;

        setError(error.message);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setLoading(false);
    });

    return () => unsubscribed;
  }, []);

  useEffect(() => {
    fetch(`https://rocky-dusk-24163.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setError("");
      })
      .catch((error) => {
        // An error happened.
        setError(error);
      });
  };

  const saveUserToDatabase = (email, displayName, method) => {
    const userinDatabase = { email, displayName };
    fetch("https://rocky-dusk-24163.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userinDatabase),
    }).then();
  };
  return {
    registerUser,
    logOut,
    loginUser,
    user,
    loading,
    error,
    admin,
  };
};

export default useFirebase;
