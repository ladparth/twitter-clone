
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyBjsxM3lW3ldlbU7abuLQBXAv37d9w4UoQ",
  authDomain: "twitter-clone-2ca5e.firebaseapp.com",
  projectId: "twitter-clone-2ca5e",
  storageBucket: "twitter-clone-2ca5e.appspot.com",
  messagingSenderId: "236627570458",
  appId: "1:236627570458:web:ad3843962083f8bb7846a3",
  measurementId: "G-277E148JG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;