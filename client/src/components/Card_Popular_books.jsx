import React from "react";
import Rating from "./Rating";

function Card_Popular_books() {
  const data = [
    {
      src: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780385534260_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
      title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
      author: "by David Grann",
    },
    {
      src: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780525566038_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
      title: "The Old Man and the Gun: And Other Tales of True Crime",
      author: "by David Grann",
    },
    {
      src: "https://media.tarad.com/p/peang22-jatujak/img-lib/spd_20170522164101_b.jpg",
      title: "intelligent investor",
      author: "benjamin graham",
    },
    {
      src: "https://m.media-amazon.com/images/I/81O-dMP4VcL._AC_UF1000,1000_QL80_.jpg",
      title: "One Up on Wall Street",
      author: "by Peter Lynch",
    },
  ];

  return (
    <div className=" bg-gray-50 dark:bg-gray-800 h-full w-full flex flex-col ">
      <p className="p-2 font-bold">Popular Book</p>
      <div className=" w-full h-full flex gap-x-4 p-2">
        {data.map((book, index) => (
          <div
            key={index}
            className=" h-full w-1/4 flex justify-center items-center bg-white border-2 border-gray-200 rounded-lg shadow p-2"
          >
            <img
              className="object-cover rounded-lg h-36 hover:scale-110"
              src={book.src}
              alt=""
            />
            <div className="flex flex-col w-full justify-between p-2 leading-normal h-full">
              <Rating />
              <h6 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden line-clamp-1">
                {book.title}
              </h6>
              <p>{book.author}</p>
              <button className=" bg-orange-400 p-2 w-1/2 rounded-md hover:scale-110">
                read
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card_Popular_books;
