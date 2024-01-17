import React from 'react'
import Card_history from '../components/Card_history'
import Navbar from '../components/Navbar'

function History() {
  return (
    <div className="h-screen w-screen flex">
      <Navbar/>
      <div className=" flex flex-col w-full h-full">
        <Card_history/>
      </div>
    </div>
  )
}

export default History