import { createContext, useEffect, useState } from 'react';
import auth from './../firebase/Firebase';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  // User Create

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log in User
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user log out
  const logOutUser = () => {
    return signOut(auth);
  };

  // Log in with github
  const handleGithubLogIn = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // Log in with Google
  const handleGoogleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // User profile
  const handleUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      return () => {
        unSubscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    createUser,
    logInUser,
    logOutUser,
    handleGithubLogIn,
    handleGoogleLogIn,
    handleUserProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
