import { useState } from 'react'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar'
import { LandingPage } from './pages/LandingPage'

function App() {

  return (
    <div className="App">
      <Router>
     {/* <ScrollToTop> */}
     <Navbar/>
      <Routes>
       <Route path="/" element={<LandingPage />} />
      </Routes>
     {/* </ScrollToTop> */}
    </Router>
    </div>
  )
}

export default App
