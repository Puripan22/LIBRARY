import React from "react";
import Navbar from "../components/Navbar.jsx";
import Card_book_bookmark from "../components/Card_book_bookmark.jsx";

function Bookmark() {
  const data1 = {
    category: "Investment",
    data: [
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
    ],
  };
  const data2 = {
    category: "Business",
    data: [
      {
        src: "https://www.ofm.co.th/blog/wp-content/uploads/2020/10/%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88.jpg",
        title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
        author: "by David Grann",
      },
      {
        src: "https://storage.naiin.com/system/application/bookstore/resource/product/201903/474728/1000216895_front_XXL.jpg?imgname=%E0%B8%97%E0%B8%B3%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%88%E0%B8%B2%E0%B8%81-10-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B9%84%E0%B8%94%E0%B9%89-100",
        title: "The Old Man and the Gun: And Other Tales of True Crime",
        author: "by David Grann",
      },
      {
        src: "https://www.ofm.co.th/blog/wp-content/uploads/2020/10/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD_1-1.jpg",
        title: "intelligent investor",
        author: "benjamin graham",
      },
      {
        src: "https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160847747L.jpg?h=d25ac65b5c664e6752b1a01551567f2f",
        title: "One Up on Wall Street",
        author: "by Peter Lynch",
      },
    ],
  };
  const data3 = {
    category: "Fiction",
    data: [
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
    ],
  };

  const data0 = [data1, data2, data3];

  return (
    <div className="flex h-screen w-screen fixed">
      <Navbar />
      <div className="flex flex-col h-full w-full">
        {data0.map((book, index) => (
          <div className="h-1/3 w-full" key={index}>
            <Card_book_bookmark data={book.data} category={book.category} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmark;
