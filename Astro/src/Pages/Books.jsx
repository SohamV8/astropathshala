import React from "react";
import Ebook from "../Components/Gems-Books/Ebook";
import BookDisplay from "../Components/Gems-Books/BookDisplay";
import "./Pages.css";

function Books() {
  return (
    <div className="books-bg">
      
        <Ebook />
        <BookDisplay />
      
    </div>
  );
}

export default Books;
