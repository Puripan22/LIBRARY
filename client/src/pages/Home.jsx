import React from 'react'
import Navbar from '../components/Navbar'
import '../css/Home.css'

function Home() {
  return (
    <div className='home-container'>

      <div className=''><Navbar/></div>
      <div className= 'home-page'>
        <div className="search">

        </div>
        <div className="book-component">
           <div className="book-days">

           </div>
           <div className='right-book-compunent'>
            <div className="author"></div>
            <div className='new-book'></div>
           </div>

        </div>
        <div className="popular">

        </div>
      </div>
      
    </div>
  )
}

export default Home