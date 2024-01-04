import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Search from "../components/Search";
function Book_table() {
  const [data, setData] = useState([]);
  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/book_table");
      if (response.status === 200 && Array.isArray(response.data)) {
        setData(response.data);
      } else {
        console.error("Unexpected response format or status:", response);
        // Handle unexpected response format or status
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const confirm = (id) => {
    Swal.fire({
      title: "ต้องการลบใช่หรือไม่",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id);
      }
    });
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`/`);
      Swal.fire("DELETED!", response.data.message, "success");
      fetchData();
    } catch (err) {
      Swal.fire("Unsuccess!", err.response.data.message, "error");
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-y-scroll">
      <Navbar />
      <div className="sm:ml-64 w-full ">
        <Search/>
        <div className="relative overflow-auto w-full h-full">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Book
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  QTY
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  EDIT
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((dataItem) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={dataItem.book_id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img src={dataItem.imageUrls} className="w-32 h-full" alt={dataItem.title} />
                  </th>
                  <td className="px-6 py-4">
                    <p>{dataItem.book_id}</p>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <p>{dataItem.title}</p>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    {dataItem.volume}
                  </td>
                  <td className="px-6 py-4">
                    <div className=" flex">
                    <button className="text-m p-2 border-solid border-2 border-gray-100 rounded bg-[#40d866] text-white hover:bg-[#49a761]
                    hover:scale-110">
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
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                      
                      <Link
                        className="text-m p-2 border-solid border-2 border-gray-100 rounded hover:scale-110"
                        to={`/edit/${dataItem.book_id}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewblog="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </Link>
                      
                      <button
                        className="text-m p-2 border-solid border-2 border-gray-100 rounded bg-[#ee4a4a] text-white hover:bg-red-700 hover:scale-110"
                        onClick={() => confirm(dataItem.book_id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewblog="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Book_table;
