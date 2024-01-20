import { useState } from "react";
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import axios from "axios";
import Navbar from "../components/Navbar";
function New_book() {
  const [progresspercent, setProgresspercent] = useState(0);
  const [imgUrl, setImageUrl] = useState(null);
  const [book_id, setBook_id] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("fiction");
  const [description, setDescription] = useState("");
  const [isbn, setISBN] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `book_cover/${file.name}`);

    try {
      // Upload
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);

      // Set the image URL state
      setImageUrl(url);

      // Get the current date in YYYY-MM-DD format
      const currentDate = new Date().toISOString().split("T")[0];

      // Log information
      console.log(
        `imgurl:${url}\nbook id:${book_id}\ntitle:${title}\nauthor:${author}\ndescription:${description}\nselected radio:${selectedRadio}\ncurrentDate:${currentDate}`
      );

      // Make POST request to the server
      const response = await axios.post(`http://localhost:8080/api/upload`, {
        book_id,
        title,
        author,
        category: selectedRadio,
        description,
        imageUrls: url,
        currentDate,
        isbn,
      });

      // Log the server response
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  // Set input value functions
  const setInputValue = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <div className="w-full h-full">
      <div className="flex w-full h-full p-10 ">
        <div className="w-1/2 h-full">
          {!imgUrl && (
            <div className="outerbar">
              <div
                className="innerbar"
                style={{ width: `${progresspercent}%` }}
              >
                {progresspercent}%
              </div>
            </div>
          )}
          {imgUrl && (
            <img src={imgUrl} alt="uploaded file" className=" h-5/6" />
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="form flex flex-col justify-center items-center h-full w-1/2 gap-y-5"
        >
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="">
              <p>book id</p>
              <input
                type="text"
                className="bg-slate-200 w-24 h-12 p-2 rounded-md mr-4"
                onChange={setInputValue(setBook_id)}
                value={book_id}
              />
            </div>
            <div className="">
              <p>book ISBN</p>
              <input
                type="text"
                className="bg-slate-200 w-32 h-12 p-2 rounded-md mr-4"
                onChange={setInputValue(setISBN)}
                value={isbn}
              />
            </div>
            <div>
              <p>Category</p>
              <select
                value={selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.value)}
                className="bg-slate-200 w-48 h-12 p-2 rounded-md"
              >
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="business">Business</option>
                <option value="history">History</option>
                <option value="computer&tech">Computer & Tech</option>
              </select>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div>
              <p>title</p>
              <input
                type="text"
                className="bg-slate-200 w-60 mr-5 h-12 p-2 rounded-md"
                onChange={setInputValue(setTitle)}
                value={title}
              />
            </div>
            <div>
              <p>author</p>
              <input
                type="text"
                className="bg-slate-200 w-48 h-12 p-2 rounded-md"
                onChange={setInputValue(setAuthor)}
                value={author}
              />
            </div>
          </div>

          <div className="flex flex-col w-3/4 items-center justify-center">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="description..."
              value={description}
              onChange={setInputValue(setDescription)}
            ></textarea>
          </div>

          <button
            type="submit"
            className=" bg-blue-500 text-white py-4 px-8 rounded-md w-64"
          >
            Upload
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default New_book;
