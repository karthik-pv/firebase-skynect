import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import OnBoard from './pages/OnBoard'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Login />} />
        <Route path='/onboard' element={<OnBoard />} />
      </Route>
    </Routes>
  )
}

export default App