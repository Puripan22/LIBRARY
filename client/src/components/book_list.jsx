import React from "react";
import Category from "../pages/Category";

export default function book_list(props) {
  const data = props.data
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-full w-full flex flex-col">
        <h2 className=" justify-start">Search Results</h2>
        <ul>
          {books.map((book,index) => (
            <li key={index}>
              <h3>title ={book.title}</h3>
              <p>{book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
