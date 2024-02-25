import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import OnBoard from './pages/OnBoard'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/onboard' element={<OnBoard />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App