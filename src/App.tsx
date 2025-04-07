import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cardlist from './components/Cardlist'

function App() {

  return (
    <div>
   <Navbar />
   <Cardlist />
   <Footer />
   </div>
  )
}

export default App
