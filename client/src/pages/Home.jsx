import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Card_Book_of_the_day from "../components/Card_Book_of_the_day";
import Card_Book_new from "../components/Card_Book_new";
import Author from "../components/Author";
import Card_Popular_books from "../components/Card_Popular_books";
function Home() {
  return (
    <div className="flex h-screen w-screen fixed">
      <Navbar />

      <div className="flex flex-col w-full h-full p-4">
        <Search />
        <div className="flex w-full h-3/5">
          <Card_Book_of_the_day />
          <div className="flex flex-col w-1/3">
            <Author />
            <Card_Book_new />
          </div>
        </div>
        <div className=" w-full h-2/5">
          <Card_Popular_books />
        </div>
      </div>
    </div>
  );
}

export default Home;
