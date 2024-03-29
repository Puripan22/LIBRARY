import { useState,useEffect} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import New_book from './pages/New_book'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Edit_book from './pages/Edit_book'
import Book from './pages/Book'
import Scan_booking from './pages/Scan_booking'
import Booking from './pages/Booking'
import Renew from './pages/Renew'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/new_book' element={<New_book/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/edit/:book_id' element={<Edit_book/>}/>
        <Route path='/book_table' element={<Book/>}/>
        <Route path='/scan' element={<Scan_booking/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/renew' element={<Renew/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
