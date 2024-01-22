import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Card_booking_history from "../components/History/Card_booking_history";
import axios from "axios";
import { UserContext } from "../../context";
function History() {
  const [data, setData] = useState([]);
  const [selectedRange, setSelectedRange] = useState("all");
  const dateRange = ["Week", "Month", "Year"];
  const {state, setState} = useContext(UserContext);

  const fetch = async () => {
    try {
      if (state && state.user && state.user.student_id) {
        console.log(`true ${state.user.student_id}`);
        
        const response = await axios.post("/all_booking", {
          student_id:state.user.student_id
        });
        if (response.status === 200 && Array.isArray(response.data)) {
          console.log(response.data);
          setData(response.data);
        } else {
          console.error("Unexpected response format or status:", response);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetch();
  }, [state && state.user && state.user.student_id]);

  return (
    <div className="flex h-screen w-screen fixed overflow-none">
      <Navbar />
      <div className="w-full overflow-y-none ">
        <div className="w-full p-4">
          <form>
            <div className="flex w-full">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Your Email
              </label>

              <select
                value={selectedRange}
                onChange={(e) => setSelectedRange(e.target.value)}
              >
                <option value="all">All Categories</option>

                {dateRange.map((range, index) => (
                  <option value={range} key={index}>
                    {range}
                  </option>
                ))}
              </select>

              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos, Design Templates..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <Card_booking_history history={data} />
      </div>
    </div>
  );
}

export default History;
