import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAlgydL6-2KSi9PBcaBARPik1zu7zqp3XY",
  authDomain: "video-player-728cf.firebaseapp.com",
  projectId: "video-player-728cf",
  storageBucket: "video-player-728cf.appspot.com",
  messagingSenderId: "95858242837",
  appId: "1:95858242837:web:09c8fdc4bb34539deb251c"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider(app);
