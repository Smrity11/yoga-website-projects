// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKE,  
//   authDomain: import.meta.env.VITE_AUTHDOMAI,
//   projectId: import.meta.env.VITE_PROJECTI,
//   storageBucket: import.meta.env.VITE_STORAGEBUCK,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDER,
//   appId: import.meta.env.VITE_APP,
// };
// // const firebaseConfig = {
// //   apiKey:'1:16951144884:web:9fb609cfe5e5ef80e842e1',  
// //   authDomain: ' yoga-project-assignment.firebaseapp.com',
// //   projectId: 'yoga-project-assignment',
// //   storageBucket: 'yoga-project-assignment.appspot.com',
// //   messagingSenderId: '16951144884',
// //   appId: '1:16951144884:web:9fb609cfe5e5ef80e842e1',
// // };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;  
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,  
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;