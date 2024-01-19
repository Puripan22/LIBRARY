import React from "react";
import Card_history from "../components/Card_history";
import Navbar from "../components/Navbar";
import Search_History from "../components/Search_History";

function History() {
  const data1 = [
    {
      src: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780385534260_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
      title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
      author: "by David Grann",
      date: "12/12/2024",
      time: "12.00",
      status: "available",
    },
  ];
  const data2 = [
    {
      src: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780525566038_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
      title: "The Old Man and the Gun: And Other Tales of True Crime",
      author: "by David Grann",
      date: "12/12/2024",
      time: "12.00",
      status: "borrowed",
    },
  ];
  const data3 = [
    {
      src: "https://media.tarad.com/p/peang22-jatujak/img-lib/spd_20170522164101_b.jpg",
      title: "intelligent investor",
      author: "benjamin graham",
      date: "12/12/2024",
      time: "12.00",
      status: "available",
    },
  ];
  const data4 = [
    {
      src: "https://m.media-amazon.com/images/I/81O-dMP4VcL._AC_UF1000,1000_QL80_.jpg",
      title: "One Up on Wall Street",
      author: "by Peter Lynch",
      date: "12/12/2024",
      time: "12.00",
      status: "borrowed",
    },
  ];
  const data5 = [
    {
      src: "https://m.media-amazon.com/images/I/81O-dMP4VcL._AC_UF1000,1000_QL80_.jpg",
      title: "One Up on Wall Street",
      author: "by Peter Lynch",
      date: "12/12/2024",
      time: "12.00",
      status: "available",
    },
  ];
  const data6 = [
    {
      src: "https://media.tarad.com/p/peang22-jatujak/img-lib/spd_20170522164101_b.jpg",
      title: "intelligent investor",
      author: "benjamin graham",
      date: "12/12/2024",
      time: "12.00",
      status: "borrowed",
    },
  ];

  const data = [data1, data2, data3, data4, data5, data6];
  return (
    <div className="h-screen w-screen flex fixed">
      <Navbar />

      <div className="flex flex-col overflow-x-hidden overflow-y-auto">
        <div className=" p-2 font-bold">History</div>
        <div className="flex flex-col w-full h-full p-4">
          <Search_History />
        </div>
        {data.map((book, index) => (
          <div key={index} className=" w-full h-1/4 flex flex-col">
            <Card_history data={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
