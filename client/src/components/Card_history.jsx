import React from "react";
import Rating_History from "./Rating_History";
import CountdownTimer from "./CountdownTimer";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function Card_history(props) {
  const data = props.data;
  const targetTime = new Date().getTime() + 334 * 60 * 60 * 24;
  const [openModal, setOpenModal] = useState(false);
  return (
    /*<div className="flex flex-col">
            <p>Artist Name</p>
          <h6 className=" font-bold text-gray-900 dark:text-white justify-center items-center ">
              {book.author}
          </h6>
          </div>*/
    <div className=" w-screen h-screen flex flex-col pt-4 ">
      <div className=" w-full h-full flex flex-col ">
        {data.map((book, index) => (
          <div
            key={index}
            className=" h-3/5 w-full flex  bg-white border-2  border-solid border-blue-200 rounded-tl-lg rounded-tr-lg shadow p-2 hover:scale-105  "
          >
            <div className=" flex w-1/2 items-center pl-11">
              <img
                className="object-cover h-36 hover:scale-125 rounded-md"
                src={book.src}
                alt=""
              />
              <div className="flex flex-col pl-4">
                <p className=" text-gray-500">Book Name</p>
                <h6 className=" font-bold text-gray-900 dark:text-white justify-center items-center pt-2">
                  {book.title}
                </h6>
              </div>
            </div>
            <div className="w-1/2 flex items-center">
              <div className="flex flex-col pl-11">
                <p className=" text-gray-500">Date</p>
                <h6 className=" justify-center  font-bold pt-2">
                  {book.date}{" "}
                </h6>
              </div>
              <div className="flex flex-col pl-11">
                <p className="text-gray-500">Time</p>
                <h6 className="justify-center font-bold pt-2">{book.time}</h6>
              </div>
              <div className="flex flex-col  pl-11">
                <p className="text-gray-500">Duration</p>
                <h6 className="justify-center font-bold pt-2 flex">
                  <CountdownTimer targetTime={targetTime} />
                </h6>
              </div>
              <div className="flex flex-col pl-11">
                <h6 className="text-gray-500">Status</h6>
                <h6 className="font-bold pt-2 text-lg font-serif text-blue-700">
                  {book.status}
                </h6>{" "}
                {/*available*/}
              </div>
            </div>
          </div>
        ))}
        <Modal show={openModal} size="lg" onClose={() => setOpenModal(false)}>
          <Modal.Header>
            <Rating_History />
          </Modal.Header>
          <Modal.Body>
            <section class="bg-white dark:bg-gray-900  antialiased ">
              <div class="max-w-2xl mx-auto px-4 ">
                <div class="flex justify-between items-center mb-6">
                  <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                    Discussion (20)
                  </h2>
                </div>
                <form class="mb-6">
                  <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label for="comment" class="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows="6"
                      class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a comment..."
                      required
                    ></textarea>
                  </div>
                </form>
                <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                  <footer class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                        <img
                          class="mr-2 w-6 h-6 rounded-full"
                          src="data:image/jpeg;base64,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"
                          alt=""
                        />
                        Cristiano Ronaldo
                      </p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        <time
                          pubdate
                          datetime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          Feb. 8, 2022
                        </time>
                      </p>
                    </div>
                    <button
                      id="dropdownComment1Button"
                      data-dropdown-toggle="dropdownComment1"
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3"
                      >
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                      </svg>
                      <span class="sr-only">Comment settings</span>
                    </button>
                    <div
                      id="dropdownComment1"
                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconHorizontalButton"
                      >
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Remove
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </footer>
                  <p class="text-gray-500 dark:text-gray-400">
                    I'm the best player in history, in the good moments and the
                    bad ones.
                  </p>
                  <div class="flex items-center mt-4 space-x-4">
                    <button
                      type="button"
                      class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                    >
                      <svg
                        class="mr-1.5 w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                        />
                      </svg>
                      Reply
                    </button>
                  </div>
                </article>
                <article class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                  <footer class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                        <img
                          class="mr-2 w-6 h-6 rounded-full"
                          src="https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1"
                          alt=""
                        />
                        Lionel Messi
                      </p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        <time
                          pubdate
                          datetime="2022-02-12"
                          title="February 12th, 2022"
                        >
                          Feb. 12, 2022
                        </time>
                      </p>
                    </div>
                    <button
                      id="dropdownComment2Button"
                      data-dropdown-toggle="dropdownComment2"
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button"
                    >
                      <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3"
                      >
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                      </svg>
                      <span class="sr-only">Comment settings</span>
                    </button>
                    <div
                      id="dropdownComment2"
                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconHorizontalButton"
                      >
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Remove
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </footer>
                  <p class="text-gray-500 dark:text-gray-400">
                    I have 8 Ballon d'Or.
                  </p>
                  <div class="flex items-center mt-4 space-x-4">
                    <button
                      type="button"
                      class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                    >
                      <svg
                        class="mr-1.5 w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                        />
                      </svg>
                      Reply
                    </button>
                  </div>
                </article>
              </div>
            </section>
          </Modal.Body>
          <Modal.Footer>
            <div className=" h-12 w-36 border-2 border-solid  border-black text-center rounded-lg bg-slate-200 ">
              <button
                type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </div>
          </Modal.Footer>
        </Modal>
        <div className=" h-2/5 w-full flex  border-t-0 border-2 border-solid border-blue-200 border-spacing-2 rounded-lg">
          <div
            onClick={() => setOpenModal(true)}
            className=" h-full flex w-1/2 justify-center items-center  cursor-pointer hover:scale-105 "
          >
            <img
              className=" h-10 pr-4"
              src="https://www.freeiconspng.com/uploads/comment-png-1.png"
              alt=""
            />
            <h6 className=" pb-4 pt-1 font-bold">comment</h6>
          </div>
          <div className="flex h-full justify-center items-center">
            <button className=" w-20 h-12 border border-solid border-spacing-2 border-blue-800 rounded-lg text-blue-400 text-center hover:scale-105">
              Renew
            </button>
          </div>
          <div className=" pl-36 flex h-full justify-center items-center">
            <button className=" w-36 h-12 border border-solid border-spacing-2 border-blue-800 rounded-lg text-white bg-gray-400 hover:scale-105">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
