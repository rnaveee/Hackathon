import React, { useState } from "react";
import './App.css';
<<<<<<< HEAD
import { db } from "./firebaseConfig"; // Make sure the path matches your file structure
=======
import { db } from "./firebaseConfig.js"; // Make sure the path matches your file structure
>>>>>>> ee185310b8d05bb80834285784d884fbcabf077c
import { collection, addDoc, Timestamp } from "firebase/firestore";


const Header = () => {
  return (
    <div>
      
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}


export default App;