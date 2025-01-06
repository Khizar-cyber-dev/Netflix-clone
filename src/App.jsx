import React, { useState } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'

const App = () => {
  const [names, setNames] = useState("");
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home names={names}/>} />
        <Route path='/' element={<Login setNames={setNames}/>} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App