import React from "react";
import Navbar from "../components/Navbar";
import Chart1 from "../components/Chart1";
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
function Dashboard() {
  const [data, setData] = useState({ countBooking: 0, countBook: 0 });
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axios.get('http://localhost:8080/api/countBook')
      setData({
        countBook: response.data.countBook[0]['COUNT(isbn)'],
        countBooking: response.data.countBooking[0]['COUNT(status)']
      });
    }
    fetchData()
  },[])
  return (
    <div className="flex h-screen w-screen ">
      <Navbar />

      <div class="w-full overflow-y-scroll ">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-full ">
          <div className="bg-gray-50 dark:bg-gray-800 h-full w-full">
            <div class="grid grid-cols-3 gap-4 mb-4 p-12">
              <div class="flex items-center h-24 w-full rounded ">
                <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white font-bold text-xl">
                  Dashboard
                </p>
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <div className="flex justify-end w-full p-2 text-blue-600 cursor-pointer">
                  Overview !
                </div>
              </div>
              <div class="flex items-center w-full h-64 justify-between rounded">
                <div className=" h-full w-1/4 rounded-lg flex border border-solid border-black bg-gradient-to-r from-red-300 to-red-400">
                  <div className="h-full w-full flex flex-col">
                    <h3 className=" text-xl pt-8 text-white">
                      จำนวนหนังสือที่ถูกยืม
                    </h3>
                    <h6 className="text-3xl pt-12 text-white">{data.countBooking} เล่ม</h6>
                  </div>
                  <div className="h-full w-1/2 pt-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-white  "
                    >
                      <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" h-full w-1/4 rounded-lg flex border border-solid border-black  bg-gradient-to-r from-green-200 to-green-400 ">
                  <div className="flex flex-col w-full h-full">
                    <h3 className="text-xl pt-8 text-white">จำนวนหนังสือ</h3>
                    <h6 className="text-3xl pt-12 text-white">{data.countBook}เล่ม</h6>
                  </div>
                  <div className="h-full w-1/2 pt-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                    </svg>
                  </div>
                </div>
                <div className=" h-full w-1/4 rounded-lg flex border border-solid border-black  bg-gradient-to-r from-blue-300 to-blue-400">
                  <div className="flex flex-col w-full h-full">
                    <h3 className="text-xl pt-8 text-white">เงินเข้า</h3>
                    <h6 className="text-3xl pt-12 text-white">99999 บาท</h6>
                  </div>
                  <div className="h-full w-1/2 pt-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                      <path
                        fillRule="evenodd"
                        d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4 p-12 pt-0">
              <div class="flex items-center rounded h-2/3 w-full">
                <div className=" w-3/4 h-full ">
                  <Chart1 />
                </div>
                <div className=" w-1/2 h-full pl-12 ">
                  <div className="w-full h-full">
                    <Chart1 />
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center rounded h-3/4 w-full pt-8">
                <div class="flex h-full w-full bg-white p-4 rounded-lg">
                  <div class="flex flex-col h-full w-full">
                    <h4 class="font-bold text-lg ">List Status</h4>
                    <div class="flex flex-col h-full w-full pt-4">
                      <table className="pt-2">
                        <thead className="border-b border-black-400">
                          <tr>
                            <th className="pb-6"> Name </th>
                            <th className="pb-6"> Book Name </th>
                            <th className="pb-6"> Status </th>
                            <th className="pb-6"> Last Update </th>
                            <th className="pb-6"> Tracking ID </th>
                          </tr>
                        </thead>
                        <tbody >
                          <tr className="border-b border-black-400">
                            <td className="pb-12 pt-12">
                              <img
                                src=""
                                class="mr-2"
                                alt=""
                              />
                              David Grey
                            </td>
                            <td className="pb-12 pt-12"> Fund is not recieved </td>
                            <td className="pb-12 pt-12">
                              <label className="bg-red-400 p-2 text-white rounded-md">
                                borrowed
                              </label>
                            </td>
                            <td className="pb-12 pt-12"> Dec 5, 2017 </td>
                            <td className="pb-12 pt-12"> WD-12345 </td>
                          </tr>
                          <tr className="border-b border-black-400 ">
                            <td className="pb-12 pt-12">
                              <img
                                src=""
                                class="mr-2"
                                alt=""
                              />
                              Stella Johnson
                            </td>
                            <td className="pb-12 pt-12"> High loading time </td>
                            <td className="pb-12 pt-12">
                              <label class="bg-red-400 p-2 text-white rounded-md">
                                borrowed
                              </label>
                            </td>
                            <td className="pb-12 pt-12"> Dec 12, 2017 </td>
                            <td className="pb-12 pt-12"> WD-12346 </td>
                          </tr>
                          <tr className="border-b border-black-400 pb-8">
                            <td className="pb-12 pt-12">
                              <img
                                src=""
                                class="mr-2"
                                alt=""
                              />
                              Marina Michel
                            </td>
                            <td className="pb-12 pt-12"> Website down for one week </td>
                            <td className="pb-12 pt-12">
                              <label class="bg-blue-400 p-2 text-white rounded-md">
                                available
                              </label>
                            </td>
                            <td className="pb-12 pt-12"> Dec 16, 2017 </td>
                            <td className="pb-12 pt-12"> WD-12347 </td>
                          </tr>
                          <tr className="">
                            <td className="pb-12 pt-12">
                              <img
                                src=""
                                class="mr-2"
                                alt=""
                              />
                              John Doe
                            </td>
                            <td className="pb-12 pt-12"> Loosing control on server </td>
                            <td className="pb-12 pt-12">
                              <label class="bg-blue-400 p-2 text-white rounded-md">
                                available
                              </label>
                            </td>
                            <td className="pb-12 pt-12"> Dec 3, 2017 </td>
                            <td className="pb-12 pt-12"> WD-12348 </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div class="flex items-center justify-center rounded ">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
              <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
