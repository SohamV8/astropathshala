import React from "react";
import Book from "../../assets/Book.png";
import bookarrow from "../../assets/bookarrow.png";

function BookDisplay() {
  const books = [
    { id: 1, name: "The Royal Art of Learning", image: Book, link: "#" },
    { id: 2, name: "Majestic Wisdom", image: Book, link: "#" },
    { id: 3, name: "Noble Knowledge", image: Book, link: "#" },
    { id: 4, name: "Regal Minds", image: Book, link: "#" },
    // Add more books here
  ];

  return (
    <div className="grid grid-cols-2 gap-8 p-12 ">
      {books.map((book) => (
        <div
          key={book.id}
          className="bookcarddisplay flex flex-col items-center p-6 text-center"
        >
          <img
            src={book.image}
            alt={book.name}
            className="w-96 h-full object-contain mb-4"
          />
          <h1 className="text-xl font-bold text-[#0b0c25] mb-2">{book.name}</h1>
          <a
            href={book.link}
            target="_blank"
            rel="noreferrer"
            className="text-[#ffb400] flex items-center justify-center text-lg font-medium hover:underline"
          >
            More Information{" "}
            <img src={bookarrow} alt="arrow" className="w-5 h-5 ml-2" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default BookDisplay;
