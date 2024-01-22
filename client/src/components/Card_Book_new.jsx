import React from "react";
import { Carousel } from 'flowbite-react';
function Card_Book_new() {
  return (
    <div className=" bg-gray-50 dark:bg-gray-800 w-full h-1/2 p-2">
      <div className="w-full h-full">
        <Carousel>
        <img src="https://pbs.twimg.com/media/CX7FbcJUMAABI53?format=jpg&name=4096x4096 " alt="" />
        <img src="https://thesiamsociety.org/wp-content/uploads/2019/09/7230640.jpg " alt="" />
        <img src="https://www.letsphuket.com/wp-content/uploads/phuket1.jpg" alt="" />
        </Carousel>
        
      </div>
    </div>
  );
}

export default Card_Book_new;
