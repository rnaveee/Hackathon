import React, { useState } from "react";
import './App.css';
import { db } from "./firebaseConfig.js"; // Make sure the path matches your file structure
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