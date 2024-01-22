import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Bookmark from "./pages/Bookmark";
import Category from "./pages/Category";
import History from "./pages/History";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import Middleware from "../context/Middleware";
import Book_detail from "./pages/Book_detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book_detail/:book_id" element={<Book_detail />} />

        <Route
          path="/bookmark"
          element={
            <Middleware>
              <Bookmark />
            </Middleware>
          }
        />
        <Route path="/category" element={<Category />} />
        <Route
          path="/history"
          element={
            <Middleware>
              <History />
            </Middleware>
          }
        />
        <Route
          path="/payment"
          element={
            <Middleware>
              <Payment />
            </Middleware>
          }
        />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
