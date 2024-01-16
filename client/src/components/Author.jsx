import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";

function Author() {
  const [count, setCount] = useState(1);
  const data = [
    {
      src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg",
      title: "Elon Musk",
    },
    {
      src: "https://media.cnn.com/api/v1/images/stellar/prod/140924173708-warren-buffett-detroit-homecoming.jpg?q=w_3000,h_2498,x_0,y_0,c_fill",
      title: "Warrent Buffett",
    },
    {
      src: "https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds",
      title: "Bill Gates",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
      title: "Steve Jobs",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const stepSize = 250;

  const back = () => {
    if (count > 1 && count < 4) {
      setCount((prevCount) => prevCount - 1);
      setScrollPosition((prevPosition) => Math.min(prevPosition + stepSize, 0));
    } else if (count < 1) {
      setCount(1);
    }
  };

  const next = () => {
    if (count > 0 && count < 3) {
      setCount((prevCount) => prevCount + 1);
      setScrollPosition((prevPosition) =>
        Math.max(prevPosition - stepSize, -stepSize * 3)
      );
    } else if (count > 3) {
      setCount(3);
    }
  };

  useEffect(() => {
    console.log("Count:", count);
  }, [count]);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-pink-300 w-full h-1/2 overflow-hidden flex-col p-2">
      <div className=" flex justify-between px-2 font-bold">
        Inspiration
        <div className="flex gap-x-2">
          <button onClick={back} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <button onClick={next} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="flex h-4/5 gap-x-5 px-2 transition-transform ease-in-out transform items-center"
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {data.map((ebook, index) => (
          <div
            key={index}
            className="h-4/5 w-24 flex flex-col justify-center items-center bg-white border-2 border-gray-200 rounded-lg shadow p-2"
            onClick={() => setOpenModal(true)}
          >
            <img
              src={ebook.src}
              alt=""
              className="h-16 w-16 object-cover rounded-full"
            />
            <p className="w-20 truncate text-center inline-block">
              {ebook.title}
            </p>
          </div>
        ))}
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Elon Must </Modal.Header>
          <Modal.Body>
            <div className="flex w-full h-full justify-between items-center">
              <div className="w-2/5">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg"
                  alt=""
                  className="w-full rounded-tl-3xl rounded-br-3xl"
                />
              </div>
              <div className="flex flex-col w-3/5 p-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 italic font-bold">
                  “If other people are putting in 40-hour workweeks and you’re
                  putting in 100-hour work weeks, then even if you’re doing the
                  same thing, you know that you will achieve in four months what
                  it takes them a year to achieve.”
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Author;
