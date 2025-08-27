import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Work from './pages/Work'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/agency' element={<Agency/>}/>
      </Routes>
    </div>
  )
}

export default App