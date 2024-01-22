import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card_book_category from "../components/Card_book_category";
import axios from "axios";

function Category() {
  const [data, setData] = useState([]);
  const [categoryList, setCategoryList] = useState(null);

  const fetch = async () => {
    try {
      const response = await axios.get("/book_table");
      console.log(response.data.category_list);
      console.log(response.data.book_table);
      if (response.status === 200 && Array.isArray(response.data.book_table)) {
        setCategoryList(response.data.category_list);
        setData(response.data.book_table);
      } else {
        console.error("Unexpected response format or status:", response);
        // Handle unexpected response format or status
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="flex h-screen w-screen fixed">
      <Navbar />
      <div className="flex flex-col h-full w-full overflow-y-scroll">
        {categoryList ? (
          categoryList.map((category, index) => (
            <div className="h-1/3 w-full " key={index}>
              <Card_book_category data={data} category={category.category}/>
            </div>
          ))
        ) : (
          <div>Loading..</div>
        )}
      </div>
    </div>
  );
}

export default Category;
