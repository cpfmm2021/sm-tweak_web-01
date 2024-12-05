import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getAnalytics, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCkq6QvOHlHjAlMk74AqKy13rTJSFOxKXY",
  authDomain: "instream-01.firebaseapp.com",
  projectId: "instream-01",
  storageBucket: "instream-01.firebasestorage.app",
  messagingSenderId: "152525740195",
  appId: "1:152525740195:web:124b6a53995ddb92d64716",
  measurementId: "G-CX82JJZYQ0"
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let analytics: Analytics | undefined;

if (typeof window !== 'undefined' && !getApps().length) {
  app = initializeApp({
    ...firebaseConfig,
    // v0.dev 도메인에서 인증이 작동하도록 설정
    authDomain: window.location.hostname === 'v0.dev' 
      ? 'v0.dev' 
      : firebaseConfig.authDomain
  });
  
  auth = getAuth(app);
  auth.useDeviceLanguage();
  
  if (window.location.hostname !== 'localhost') {
    analytics = getAnalytics(app);
  }
}

export { app, auth, analytics };

