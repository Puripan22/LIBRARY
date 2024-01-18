import React from 'react'
import Rating from './Rating'
import CountdownTimer from './CountdownTimer'

export default function Card_history(props) {
  const data=props.data
  const targetTime = new Date().getTime() + 334 * 60 * 60 * 24;
  return (
    /*<div className="flex flex-col">
            <p>Artist Name</p>
          <h6 className=" font-bold text-gray-900 dark:text-white justify-center items-center ">
              {book.author}
          </h6>
          </div>*/
    <div className=" w-screen h-screen flex flex-col ">
        <div className=" w-full h-full flex ">
      {data.map((book, index) => (
        <div key={index}  className=" h-3/5 w-full flex  bg-white border-2 border-gray-200 rounded-lg shadow p-2 hover:scale-105">
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
            <h6 className=" justify-center  font-bold pt-2">{book.date} </h6>
          </div>
          <div className="flex flex-col pl-11">
            <p className="text-gray-500">Time</p>
            <h6 className="justify-center font-bold pt-2">{book.time}</h6>
          </div>
          <div className="flex flex-col  pl-11">
            <p className="text-gray-500">Duration</p>
            <h6 className="justify-center font-bold pt-2 flex"><CountdownTimer targetTime={targetTime} /></h6>
          </div>
          <div className="flex flex-col pl-11">
            <h6 className="text-gray-500">Status</h6>
            <h6 className="font-bold pt-2 text-lg font-serif text-blue-700">{book.status}</h6> {/*available*/}
          </div>
          </div>
          </div>
      ))}
      </div>
    </div>
  )
}
