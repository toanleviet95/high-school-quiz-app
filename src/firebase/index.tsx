import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoTyfUGgpNTW5sCBPvMuB9g77S1uWGM58",
  authDomain: "high-school-quiz-app.firebaseapp.com",
  projectId: "high-school-quiz-app",
  storageBucket: "high-school-quiz-app.firebasestorage.app",
  messagingSenderId: "1008614928912",
  appId: "1:1008614928912:web:35362dd4bfc9ba256dd095",
  measurementId: "G-JFDKFTDXTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export authentication instance
export const auth = getAuth(app);
