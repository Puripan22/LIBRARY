import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { storage } from "./firebase";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import axios from "axios";
function Edit_book() {
  const [progresspercent, setProgresspercent] = useState(0);
  const [imgUrl, setImageUrl] = useState(null);
  const [book_ID, setBook_id] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("fiction");
  const [description, setDescription] = useState("");
  const { book_id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) {
      try {
        // Make PUT request to the server
        const response = await axios.put(
          `http://localhost:8080/api/book_edit/${book_ID}`,
          {
            title,
            author,
            category: selectedRadio,
            description,
            imageUrls: imgUrl,
          }
        );

        // Log the server response
        console.log(response.data);
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    } else {
      try {
        // Delete the existing file
        await deleteExistingFile();

        // Upload the new file
        const url = await uploadNewFile(file);

        // Update book data on the server
        await updateBookData(url);

        // Log information
        console.log(
          `imgurl:${url}\nbook id:${book_id}\ntitle:${title}\nauthor:${author}\ndescription:${description}\nselected radio:${selectedRadio}`
        );
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    }
  };

  const deleteExistingFile = async () => {
    let filename = imgUrl.split("%2F")[1];
        filename = filename.split("?alt")[0];
    const imageRef = ref(storage, `book_cover/${filename}`);

    deleteObject(imageRef)
      .then(() => {
        console.log("Image deleted successfully");
        // Handle successful deletion (e.g., remove image from UI)
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
        // Handle error (e.g., display error message)
      });
  };

  const uploadNewFile = async (file) => {
    const storageRef = ref(storage, `book_cover/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    return getDownloadURL(snapshot.ref);
  };

  const updateBookData = async (url) => {
    try {
      // Make PUT request to update book data
      const response = await axios.put(
        `http://localhost:8080/api/book_edit/${book_ID}`,
        {
          title,
          author,
          category: selectedRadio,
          description,
          imageUrls: url,
        }
      );

      // Log the server response
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error updating book data:", error);
    }
  };

  const fetch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/book_detail/${book_id}`
      );
      const book = response.data[0];
      console.log();
      setAuthor(book.author);
      setTitle(book.title);
      setDescription(book.description);
      setImageUrl(book.imageUrls);
      setSelectedRadio(book.category);
      setBook_id(book.book_id);
    } catch (error) {
      console.error("error!");
    }
  };

  useEffect(() => {
    console.log(book_id);
    fetch();
  }, [imgUrl]);

  // Set input value functions
  const setInputValue = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="w-screen h-screen p-10 flex justify-center items-center">
      <div className="w-1/2 h-full">
        {!imgUrl && (
          <div className="outerbar">
            <div className="innerbar" style={{ width: `${progresspercent}%` }}>
              {progresspercent}%
            </div>
          </div>
        )}
        {imgUrl && (
          <img src={imgUrl} alt="uploaded file" className="w-fit h-full" />
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="form flex flex-col justify-center items-center h-full w-1/2 gap-y-5"
      >
        <input type="file" />
        <div className="">
          <p>book id</p>
          <p className="bg-slate-200 w-64 h-8 p-2">{book_ID}</p>
        </div>
        <div>
          <p>title</p>
          <input
            type="text"
            className="bg-slate-200 w-64 h-8 p-2"
            onChange={setInputValue(setTitle)}
            value={title}
          />
        </div>
        <div>
          <p>author</p>
          <input
            type="text"
            className="bg-slate-200 w-64 h-8 p-2"
            onChange={setInputValue(setAuthor)}
            value={author}
          />
        </div>

        <div>
          <p>Category</p>
          <select
            value={selectedRadio}
            onChange={(e) => setSelectedRadio(e.target.value)}
            className="bg-slate-200 w-64 h-12 p-2"
          >
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
  );
}

export default Edit_book;
