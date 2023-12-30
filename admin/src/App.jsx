import { useState,useEffect} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import New_book from './pages/New_book'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/new_book' element={<New_book/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
