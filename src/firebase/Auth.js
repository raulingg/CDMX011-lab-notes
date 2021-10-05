import { googleAuthProvider, auth } from "./firebase-config";

export const GoogleLogin = () => {
return auth.signInWithPopup(googleAuthProvider)
}