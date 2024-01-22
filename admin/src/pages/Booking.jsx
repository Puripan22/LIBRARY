import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
function Booking() {
  const [username, setUsername] = useState('');
  const [book_id, setBook_id] = useState('');
  const [isbn, setIsbn] = useState('');
  const [start_date, setStartdate] = useState(new Date().toISOString().split('T')[0]);
  const [end_date,setEndDate] = useState('')
  
  useEffect(() => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 14);
  
    // Format the date as 'YYYY-MM-DD'
    const formattedEndDate = futureDate.toISOString().split('T')[0];
  
    setEndDate(formattedEndDate);
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ตั้งค่า start_date เป็นวันที่ปัจจุบัน
    setStartdate(new Date().toISOString().split('T')[0]);
  
    try {
      const response = await axios.post(`http://localhost:8080/api/booking`, {
        student_id: username,
        isbn,
        book_id,
        start_date,
        end_date,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleInputChange = (setter)=> (e)=>{
    setter(e.target.value)
  }

  const input_list = [
    {
      name: 'Username',
      icon: (
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
          />
        </svg>
      ),
      value: username,
      set: setUsername,
    },
    {
      name: 'Book id',
      icon: (
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
          />
        </svg>
      ),
      value: book_id,
      set: setBook_id,
    },
    {
      name: 'ISBN',
      icon: (
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
          />
        </svg>
      ),
      value: isbn,
      set: setIsbn,
    },
  ];



  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <form className="max-w-sm mx-auto w-full h-full" onSubmit={handleSubmit}>
        {input_list.map((data, index) => (
          <div key={index}>
            <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {data.name}
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                {data.icon}
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`${data.name}`}
                value={data.value}
                onChange={handleInputChange(data.set)}
              />
            </div>
          </div>
        ))}
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

export default Booking;
