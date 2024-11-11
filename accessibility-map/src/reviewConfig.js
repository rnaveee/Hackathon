import React, { useState } from "react";
import './App.css';
import { db } from "./firebaseConfig"; // Make sure the path matches your file structure
import { collection, addDoc, Timestamp, query, where, getDocs } from "firebase/firestore";

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

export async function getLatestReview(zipCode) {
  try {
    // Create a query to find reviews with the specific zipcode
    const q = query(collection(db, "reviews"), where("zipCode", "==", zipCode));

    // Execute the query and get the documents
    const querySnapshot = await getDocs(q);
    
    // Map the results to an array of review data in JSON format
    const reviews = querySnapshot.docs.map(doc => ({
      id: doc.id,  // Document ID
      ...doc.data(),  // Document data (the review fields)
    }));

    // Return the reviews as a JSON-like array of objects
    return reviews;
  } catch (error) {
    console.error("Error getting reviews by zipcode: ", error);
  }
}