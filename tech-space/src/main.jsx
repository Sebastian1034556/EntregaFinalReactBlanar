import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6eOlJ3DvHZ9kDD5IEySehphvCdtPMJU8",
  authDomain: "ecommerce-coderhouse-9711c.firebaseapp.com",
  projectId: "ecommerce-coderhouse-9711c",
  storageBucket: "ecommerce-coderhouse-9711c.appspot.com",
  messagingSenderId: "490846691748",
  appId: "1:490846691748:web:925faac32702b85812e131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
