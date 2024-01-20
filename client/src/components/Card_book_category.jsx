import React from "react";
import Rating from "./Rating";
import { useState } from "react";
import { useEffect } from "react";

export default function Card_book_category(props) {
  const data = props.data;
  const category = props.category;
  const [count, setCount] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const stepSize = 250;

  const back = () => {
    if (count > 1 && count < 7) {
      setCount((prevCount) => prevCount - 1);
      setScrollPosition((prevPosition) => Math.min(prevPosition + stepSize, 0));
    } else if (count < 1) {
      setCount(1);
    }
  };

  const next = () => {
    if (count > 0 && count < 6) {
      setCount((prevCount) => prevCount + 1);
      setScrollPosition((prevPosition) =>
        Math.max(prevPosition - stepSize, -stepSize * 6)
      );
    } else if (count > 6) {
      setCount(6);
    }
  };

  useEffect(() => {
    console.log("Count:", count);
  }, [count]);
  return (
    <div className=" bg-green-400 h-full w-full flex flex-col border border-gray-300 overflow-hidden">
      <div className="flex">
      <p className="p-2 font-bold w-1/2">{category}</p>
      <div className=" flex justify-end px-2 font-bold w-1/2">
        <div className="flex gap-x-2">
          <button onClick={back} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <button onClick={next} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>

      <div className=" w-full h-full flex gap-x-4 p-2 transition-transform ease-in-out transform" style={{ transform: `translateX(${scrollPosition}px)` }}>
        {data.map((book, index) => (
          <div
            key={index}
            className=" h-full w-1/4 flex justify-center flex-shrink-0 items-center bg-white border-2 border-gray-200 rounded-lg shadow p-2"
          >
            <img
              className="object-cover rounded-lg h-36 hover:scale-110"
              src={book.src}
              alt=""
            />
            <div className="flex flex-col w-full justify-between p-2 leading-normal h-full">
              <Rating />
              <h6 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden line-clamp-1">
                {book.title}
              </h6>
              <p>{book.author}</p>
              <button className=" bg-orange-400 p-2 w-1/2 rounded-md hover:scale-110">
                read
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
