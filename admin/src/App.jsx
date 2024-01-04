import { useState,useEffect} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import New_book from './pages/New_book'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/new_book' element={<New_book/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
