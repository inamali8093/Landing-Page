import { useState } from 'react'
//import './App.css'
import UpperHeader from './components/UpperHeader'
import Header from './components/Header'
import Main from './components/Main'
import Partition from './components/Partition'
import AboutWork from './components/AboutWork'
import Talent from './components/Talent'
import Process from './components/Process'
import Register from './components/Register'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LowerFooter from './components/LowerFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#F4F3E1]'>
    <UpperHeader />
    <Header />
    <Main />
    <Partition />
    <AboutWork />
    <Talent />
    <Process />
    <Register />
    <Contact />
    <Footer />
    <LowerFooter />
    </div>
    </>
  )
}

export default App
