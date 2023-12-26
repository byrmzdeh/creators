
import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './sass/style.scss'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

