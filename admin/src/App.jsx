import { useState,useEffect} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import New_book from './pages/New_book'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Edit_book from './pages/Edit_book'
import Book_table from './pages/Book_table'
import Scan_booking from './pages/Scan_booking'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/new_book' element={<New_book/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/edit/:book_id' element={<Edit_book/>}/>
        <Route path='/book_table' element={<Book_table/>}/>
        <Route path='/scan' element={<Scan_booking/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
