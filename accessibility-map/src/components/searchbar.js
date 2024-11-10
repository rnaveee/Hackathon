import React from 'react' //importing react
import './searchresult.css'; /*for button*/
import './searchbar.css'; 
//function for the search bar
function SearchBar() {
    return (
      <div>
        <input type="text" placeholder="enter zipcode" />
        
        <div>
        </div>
        <button className="searchresultbutton">Search</button>
      </div>
    );
  }
  
  export default SearchBar;