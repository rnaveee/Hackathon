import React, { useState } from "react";
import './App.css';
import { db } from "./firebaseConfig"; // Make sure the path matches your file structure
import { collection, addDoc, Timestamp } from "firebase/firestore";

export function addReview(zipCode, typeRating, reviewText, starRating) {
  try {
    const docRef = addDoc(collection(db, "reviews"), {
      zipCode: zipCode,
      typeRating: typeRating,
      reviewText: reviewText,
      starRating: starRating,
      timestamp: Timestamp.now()
    });
    console.log("added review: ", docRef.id)
  }
  catch (error) {
    console.error("error", error)
  }
}