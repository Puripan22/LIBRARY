import React from "react";
import Rating from "./Rating";

function Card_Book_of_the_day() {
  return (
    <div className="p-2 w-2/3 h-full bg-red-300">
      <div className="w-full h-full flex  items-center bg-white border-2 border-gray-200 rounded-lg shadow p-5">
        <img
          className="object-cover w-full rounded-lg h-full hover:scale-110"
          src="https://media.harrypotterfanzone.com/goblet-of-fire-uk-childrens-edition-2014.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between pl-5 leading-normal h-full">
          <h7 className="font-bold">Book of the Day</h7>
          <Rating/>
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Harry Potter and the Goblet of Fire
          </h6>
          <p>JK Rowling</p>
          <p className="mb-3 text-gray-700 dark:text-gray-400">
            Harry's (Daniel Radcliffe's) fourth year at Hogwarts is about to
            start and he is enjoying the summer vacation with his friends. They
            get the tickets to The Quidditch World Cup Final, but after the
            match is over, people dressed like Lord Voldemort's (Ralph Fiennes')
            "Death Eaters" set a fire to all of the visitors' tents, coupled
            with the appearance of Voldemort's symbol, the "Dark Mark" in the
            sky, which causes a frenzy across the magical community. 
          </p>
          <a href="/book_detail" className=" bg-orange-400 p-2 w-1/4 rounded-md hover:scale-110 text-center">detail</a>
        </div>
      </div>
    </div>
  );
}

export default Card_Book_of_the_day;
