import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Navbar'
import Home from './Home'

import BoySection from './Boysection'
import WomanSection from './WomanSection'
import ChildrenSection from './ChildrenSection'
import Footer from './Footer'

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <Home /> 

      <BoySection />
      <WomanSection />
      <ChildrenSection/>
      <Footer />
    </div>
  )
}

export default App
