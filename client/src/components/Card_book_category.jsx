import React from 'react'
import Rating from "./Rating";

export default function Card_book_category(props) {
    const data=props.data
    const category=props.category
  return (
    <div className=" bg-green-400 h-full w-full flex flex-col border border-gray-300">
      <p className="p-2 font-bold">{category}</p>
      <div className=" w-full h-full flex gap-x-4 p-2">
      {data.map((book, index) => (
        <div key={index}  className=" h-full w-1/4 flex justify-center items-center bg-white border-2 border-gray-200 rounded-lg shadow p-2">
          <img
            className="object-cover rounded-lg h-36"
            src={book.src}
            alt=""
          />
          <div className="flex flex-col w-full justify-between p-2 leading-normal h-full">
            <Rating />
            <h6 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden line-clamp-1">
              {book.title}
            </h6>
            <p>{book.author}</p>
            <button className=" bg-orange-400 p-2 w-1/2 rounded-md">
              read
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
