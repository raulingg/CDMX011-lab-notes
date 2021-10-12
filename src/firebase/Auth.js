import { googleAuthProvider, auth } from "./firebase-config";

export const GoogleLogin = () => auth.signInWithPopup(googleAuthProvider);

export const createUsser = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export const emailLogin = (email, password) => auth.signInWithEmailAndPassword(email, password);