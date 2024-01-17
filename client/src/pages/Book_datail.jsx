import React from "react";
import Navbar from "../components/Navbar";
import Rating from "../components/Rating";
import Comment from "../components/Comment";
function Book_datail() {
  return (
    <div className="flex h-screen w-screen">
      <Navbar />

      <div className="flex flex-col w-full h-full p-4 bg-[#F5EEE6]">
        <div className="w-full h-full flex  items-center bg-white border-2 border-gray-200 rounded-lg shadow p-5">
          <img
            className="object-cover w-full rounded-lg h-full"
            src="https://media.harrypotterfanzone.com/goblet-of-fire-uk-childrens-edition-2014.jpg"
            alt=""
          />
          <div className="flex flex-col gap-y-4 pl-5 leading-normal h-full justify-center">
          <Rating />
            <h6 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white flex  ">
              Harry Potter and the Goblet of Fire 
            </h6>
            <div className=" flex items-center gap-x-5">
            
              <div className=" flex hover:scale-125">
                <button className=" bg-black p-3 w-32 rounded-md flex justify-around items-center">
                  <p className=" text-white">Go book</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="w-12 h-12 border rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 border rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full flex gap-x-5 items-center">
              <div className="border-2 rounded-lg w-1/4 h-24 flex flex-col justify-center items-center">
                <p className="font-bold text-xl">Editors</p>
                <p className="">JK Rowling</p>
              </div>
              <div className="border-2 rounded-lg w-1/4 h-24 flex flex-col justify-center items-center">
                <p className="font-bold text-xl">Languege</p>
                <p>Standard English USA&UK</p>
              </div>
            </div>
            <div className="border-2 rounded-lg p-3">
              <p className="font-bold text-xl">Description</p>
              <p className="mb-3 text-gray-700 dark:text-gray-400 ">
                Harry's (Daniel Radcliffe's) fourth year at Hogwarts is about to
                start and he is enjoying the summer vacation with his friends.
                They get the tickets to The Quidditch World Cup Final, but after
                the match is over, people dressed like Lord Voldemort's (Ralph
                Fiennes') "Death Eaters" set a fire to all of the visitors'
                tents, coupled with the appearance of Voldemort's symbol, the
                "Dark Mark" in the sky, which causes a frenzy across the magical
                community.
              </p>
            </div>

            <div>
              <Comment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book_datail;
