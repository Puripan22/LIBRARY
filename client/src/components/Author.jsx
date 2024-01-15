import React, { useState,useEffect } from "react";

function Author() {
    const [count,setCount] = useState(1)
  const data = [
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 1",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 2",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 3",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 4",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 5",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 6",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 7",
    },
    {
      src: "https://m.media-amazon.com/images/I/71m2KkObwCL._SY466_.jpg",
      title: "Wealth Creation 8",
    }
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const stepSize = 200;

  const back = () => {
    if (count > 1 && count < 4) {
      setCount((prevCount) => prevCount - 1);
      setScrollPosition((prevPosition) => Math.min(prevPosition + stepSize, 0));
    } else if (count < 1) {
      setCount(1);
    }
  };

  const next = () => {
    if (count > 0 && count <3) {
      setCount((prevCount) => prevCount + 1);
      setScrollPosition((prevPosition) => Math.max(prevPosition - stepSize, -stepSize * (3)));
    }
    else if (count > 3) {
        setCount(3);
      }
  };

  useEffect(() => {
    console.log("Count:", count);
  }, [count]);

  return (
    <div className="bg-red-600 w-full h-1/2 overflow-hidden flex-col p-2">
      <div className=" flex justify-between">
        EBOOK 
        <div className="flex gap-2">
        <button onClick={back} className="">
          <p>Back</p>
        </button>
        <button onClick={next} className="">
          <p>Next</p>
        </button>
        
      </div>
      </div>
      <div className="flex p-2 transition-transform ease-in-out transform" style={{ transform: `translateX(${scrollPosition}px)` }}>
        {data.map((ebook, index) => (
          <div key={index} className="mr-8">
            <div>
              <img src={ebook.src} alt="" className="w-16" />
              <p>{ebook.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Author;
