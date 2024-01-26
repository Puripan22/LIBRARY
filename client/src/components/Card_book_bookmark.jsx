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
  const [Clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!Clicked);
  };

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
    <div className=" bg-gray-100 dark:bg-gray-800 h-full w-full flex flex-col border border-gray-300 overflow-hidden">
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

      <div
        className=" w-full h-full flex gap-x-4 p-2 transition-transform ease-in-out transform"
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {data.map((book, index) => (
          <div
            key={index}
            className=" h-full w-1/4 flex justify-center items-center flex-shrink-0 bg-white border-2 border-gray-200 rounded-lg shadow p-2"
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
              <div className="flex">
                <button className=" bg-orange-400 p-2 w-1/2 rounded-md hover:scale-110">
                  read
                </button>
                <div className="w-1/2 flex justify-end items-center space-x-2">
                  <button
                    style={{ color: Clicked ? "black" : "gray" }}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none  "
                    onClick={handleClick}
                  >
                    <svg
                      className={` w-6 h-6 me-1 cursor-pointer`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
