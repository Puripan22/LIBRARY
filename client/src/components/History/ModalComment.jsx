import axios from "axios";
import React, { useEffect, useState } from "react";

function ModalComment({ dataFromModal }) {
  const [comment, setComment] = useState("");
  useEffect(() => {
    console.log(dataFromModal.book_id);
    const fetchComments = async (book_id) => {
      try {
        console.log(dataFromModal.book_id);
        const response = await axios.post("/getComment", {
          book_id,
        });
        console.log(response.data);
        setComment(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments(dataFromModal.book_id);
  }, [dataFromModal]);

  return (
    <section className="bg-white dark:bg-gray-900  antialiased ">
      <div className="max-w-2xl mx-auto px-4 ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion (20)
          </h2>
        </div>
        <form className="mb-6">
          <div className="py-2 p-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              className=" w-full border border-slate-300 rounded-lg p-2 text-sm text-gray-900  focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 focus:border-slate-400"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
        </form>
        {comment ? (
          comment.map((data, index) => (
            <article
              className="p-6 text-base bg-white rounded-lg dark:bg-gray-900"
              key={index}
            >
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://avatars.githubusercontent.com/u/110112184?s=400&u=2075971169db214cc42d7ec57c4404375f367e11&v=4"
                      alt=""
                    />
                    {data.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(data.comment_timestamp).toLocaleString()}
                  </div>
                </div>
                <button
                  id="dropdownComment1Button"
                  data-dropdown-toggle="dropdownComment1"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
              </footer>
              <div className="text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-yellow-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  {data.rating}
                </div>
                {data.comment}
              </div>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Reply
                </button>
              </div>
            </article>
          ))
        ) : (
          <div>Loading..</div>
        )}
      </div>
    </section>
  );
}

export default ModalComment;
