import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Book_detail from './pages/Book_datail'
import Bookmark from './pages/Bookmark'
import Category from './pages/Category'
import History from './pages/History'
import Payment from './pages/Payment'
import Search from './pages/Search'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/book_detail' element={<Book_detail/>}/>
        <Route path='/bookmark' element={<Bookmark/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
