import React, { useState } from "react";
import './App.css';
import { db } from "./firebaseConfig"; // Make sure the path matches your file structure
import { collection, addDoc, Timestamp } from "firebase/firestore";

function addReview(userName, typeRating, reviewText) {
    try {
      const docRef = addDoc(collection(db, "reviews"), {
        userName: userName,
        typeRating: typeRating,
        reviewText: reviewText,
        timestamp: Timestamp.now()
      });
      console.log("added review: ", docRef.id)
    }
    catch (error) {
      console.error("error", error)
    }
  }
