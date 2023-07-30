import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/app";
// import "firebase/analytics";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "personal-portfolio-4a24c.firebaseapp.com",
  projectId: "personal-portfolio-4a24c",
  storageBucket: "personal-portfolio-4a24c.appspot.com",
  messagingSenderId: "311883681974",
  appId: "1:311883681974:web:cc35ae087130270b879617",
  measurementId: "G-RPK8F3R5GR",
};

export const initFirebase = () => {
  //   const app = initializeApp(firebaseConfig);
  //   if (!app.length) {
  //     firebase.initializeApp(firebaseConfig);
  //     firebase.analytics(); // Initialize Firebase Analytics
  //   }
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return analytics;
};
