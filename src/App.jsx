import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import line from './assets/lines.png'




function App() {

  return (
    <div>
      <div className="lines">
        <img src={line} alt="" />
      </div>
      <Navbar></Navbar>
      <Main/>


    </div>
  )
}

export default App
