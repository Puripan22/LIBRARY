import React, { useState, useEffect,useContext } from "react";
import CountdownTimer from "../History/CountdownTimer";
import { UserContext } from "../../../context"; 
import axios from "axios";
import ModalComponent from "../History/Modal";
function Card_booking_history({ history }) {
  const [newDate, setNewDate] = useState("");
  const {openModal, setOpenModal} = useContext(UserContext);
  const [selectBookData,setSelectBook] = useState(null)
  const targetTime = new Date().getTime() + 334 * 60 * 60 * 24;
  const nowDate = new Date().toISOString().split("T")[0];

  useEffect(()=>{
    console.log(openModal)
  },[openModal])

//Handle set OpenModal
const handleCLick =(book)=>{
  setOpenModal(true)
  setSelectBook(book)
  localStorage.setItem('openModal',true)
}

  //Renew Function
  const renewBook = async (student_id, isbn, book_id, end_date) => {
    try {
      console.log(student_id, isbn, book_id, end_date);
      const futureDate = new Date(end_date);
      futureDate.setDate(futureDate.getDate() + 14);

      // Format the date as 'YYYY-MM-DD'
      const formattedEndDate = futureDate.toISOString().split("T")[0];
      console.log(formattedEndDate);
      setNewDate(formattedEndDate);

      const renewResponse = await axios.put(`http://localhost:8080/api/renew`, {
        student_id: student_id,
        isbn: isbn,
        book_id: book_id,
        renew: true,
        addDate: formattedEndDate,
        status: "Renewed",
      });

      console.log(renewResponse.data);
    } catch (error) {
      console.error("Error renewing book:", error);
    }
  };
  return (
    <div className=" h-5/6 w-full flex">
      <div className="flex flex-col overflow-x-hidden overflow-y-auto w-full px-4">
        <div className="p-2 font-bold">History</div>
        <div className="w-full h-full flex flex-col gap-y-5">
          {history ? (
            history.length > 0 ? (
              history.map((book, index) => (
                <div
                  key={index}
                  className="w-full h-1/4 border-2 border-solid border-blue-200 border-spacing-2 rounded-lg hover:border-gray-500"
                >
                  <div className=" h-2/3 w-full flex  bg-white border-2  rounded-tl-lg rounded-tr-lg p-2  border-solid border-blue-200 border-spacing-2 border-t-0 border-l-0 border-r-0 ">
                    <div className=" flex w-1/2 items-center pl-11">
                      <img
                        className="object-cover h-28 hover:scale-110 rounded-md transition duration-700 ease-in-out"
                        src={book.imageUrls}
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
                        <p className=" text-gray-500">Start</p>
                        <h6 className=" justify-center  font-bold pt-2">
                          {
                            new Date(book.start_date)
                              .toISOString()
                              .split("T")[0]
                          }
                        </h6>
                      </div>
                      <div className="flex flex-col pl-11">
                        <p className="text-gray-500">End</p>
                        <h6 className="justify-center font-bold pt-2">
                          {new Date(book.end_date).toISOString().split("T")[0]}
                        </h6>
                      </div>
                      {nowDate === book.end_date ? (
                        <div className="flex flex-col pl-11">
                          <p className="text-gray-500">Duration</p>
                          <h6 className="justify-center font-bold pt-2 flex">
                            <CountdownTimer targetTime={targetTime} />
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="flex flex-col pl-11">
                        <h6 className="text-gray-500">Status</h6>
                        <h6 className="font-bold pt-2 text-lg font-serif text-blue-700">
                          {book.status}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full flex  ">
                    <div
                      onClick={()=>handleCLick(book)}
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
                      <button
                        className=" w-20 h-12 border border-solid border-spacing-2 border-blue-800 rounded-lg text-blue-400 text-center hover:scale-105"
                        onClick={() =>
                          renewBook(
                            book.student_id,
                            book.isbn,
                            book.book_id,
                            book.end_date
                          )
                        }
                      >
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
              ))
            ) : (
              <p>No history available</p>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      {/* Pass selectedBook to ModalComponent */}
      {selectBookData && <ModalComponent data={selectBookData} />}
    </div>
  );
}

export default Card_booking_history;
