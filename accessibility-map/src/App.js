import React, { useEffect, useState } from "react";
import './App.css';
import { db } from "./firebaseConfig"; // Make sure the path matches your file structure
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { addReview } from "firebase/firestore"


const Header = () => {
  return (
    <div>
      hello
    </div>
  )
}

const handleReviewInput = () => {
  return (
    <div>

    </div>
  )
}


// function App() {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     getReviews().then((reviews) => setReviews(reviews));
//   });

//   return (
//     <div className="App">
//       <Header />
//       [reviews]
//     </div>
//   );
// }


// export default App;
