import React from "react";
import Rating from "./Rating";

function Card_Popular_books() {
  const data = [
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 1",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 2",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 3",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 4",
    },
  ];

  return (
    <div className=" bg-green-400 h-full w-full flex flex-col">
      <p className="py-2">Popular Book</p>
      <div className=" w-full h-full flex justify-around">
      {data.map((book, index) => (
        <div key={index}  className=" h-full flex justify-center items-center bg-white border-2 border-gray-200 rounded-lg shadow p-2">
          <img
            className="object-cover rounded-lg h-36"
            src={book.src}
            alt=""
          />
          <div className="flex flex-col justify-between p-2 leading-normal h-full">
            <Rating />
            <h6 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white break-normal">
              {book.title}
            </h6>
            <p>JK Rowling</p>
            <button className=" bg-orange-400 p-2 w-16 rounded-md">
              read
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Card_Popular_books;
