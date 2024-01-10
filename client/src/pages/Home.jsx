import React from 'react'
import Navbar from '../components/Navbar'
import Card_Popular_books from '../components/Card_Popular_books'
import Card_book_new from '../components/Card_Book_new'
import Card_book_day from '../components/Card_Book_of_the_day'
import '../css/Home.css'

function Home() {
    const handleClick = () => {
      alert('');
    };
  return (
    <div className='home-container'>

      <div className='Navbar-container'>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <Navbar/>
      </div>
      <div className= 'home-page'>
        <div className="search">
          <input className = 'tab-search' type="text" />
          <button onClick={handleClick} className='button-search'><p>search</p></button>

        </div>
        <div className="book-component">
           <div className="book-days">
            <Card_book_day/>
           </div>
           <div className='right-book-compunent'>
            <div className="author"></div>
            <div className='new-book'><Card_book_new/></div>
           </div>

        </div>
        <div className="popular">
          <Card_Popular_books/>
        </div>
      </div>
      
    </div>
  )
}

export default Home