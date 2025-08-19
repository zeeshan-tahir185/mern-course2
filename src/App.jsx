import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import FourOFour from './components/FourOFour';
import About from './components/About';
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<FourOFour />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
