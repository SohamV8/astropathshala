import React from "react";
import PitraBook from "../../assets/Pitra-Book.png";
import Pitrafront from "../../assets/Pitra-Book-Front.png";
import JyotishBook from "../../assets/Book.png";
import Jyotishfront from "../../assets/Jyotish-book-Front.png";
import bookarrow from "../../assets/bookarrow.png";
import "./BookDisplay.css";
import './Fonts.css'; 

function BookDisplay() {
  const books = [
    { id: 1, name: "The Royal Art of Learning", image: Pitrafront, hoverImage: PitraBook, link: "#" },
    { id: 2, name: "Majestic Wisdom", image: Jyotishfront, hoverImage: JyotishBook, link: "#" },
    { id: 3, name: "Noble Knowledge", image: Pitrafront, hoverImage: PitraBook, link: "#" },
    { id: 4, name: "Regal Minds", image: Jyotishfront, hoverImage: JyotishBook, link: "#" },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 p-12">
      {books.map((book) => (
        <div
          key={book.id}
          className="bookcarddisplay flex flex-col items-center p-6 text-center group"
        >
          <div className="relative w-72 h-96 mb-4">
            <img
              src={book.image}
              alt={book.name}
              className="default-img w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
            />
            <img
              src={book.hoverImage}
              alt={`${book.name} hover`}
              className="hover-img w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
            />
          </div>
          <h1 className="font-soria text-lg text-[#0b0c25] mb-2">{book.name}</h1>
          <a
            href={book.link}
            target="_blank"
            rel="noreferrer"
            className="font-OCR text-[#ffb400] flex items-center justify-center text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            More Information{" "}
            <img src={bookarrow} alt="arrow" className="w-4 h-4 ml-1" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default BookDisplay;
