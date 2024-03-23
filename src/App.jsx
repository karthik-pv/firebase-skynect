import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import OnBoard from './pages/OnBoard'
import Home from './pages/Home'
import Profile from './pages/Profile'
import GrantList from './pages/GrantList'
import GrantPage from './pages/GrantPage'
import CreateGrant from './pages/CreateGrant'
import VCList from './pages/VCList'
import VCPage from './pages/VCPage'
import CreateVC from './pages/CreateVC'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/onboard' element={<OnBoard />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/grantlist' element={<GrantList />} />
      <Route path='/grant' element={<GrantPage/>}/>
      <Route path='/creategrant' element={<CreateGrant/>}/>
      <Route path='/vclist' element={<VCList/>}/>
      <Route path='/vc' element={<VCPage />} />
      <Route path='/createvc' element={<CreateVC/>}/>
    </Routes>
  )
}

export default App