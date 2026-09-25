import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Facilities from './components/Facilities'
import AboutUsOverview from './components/AboutUsOverview'
import OurServices from './components/OurServices'
import MembershipOverview from './components/MembershipOverview'
import Gallery from './components/Gallery'
import ReadyToJoin from './components/ReadyToJoin'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Facilities />
      <AboutUsOverview />
      <OurServices />
      <MembershipOverview />
      <Gallery />
      <ReadyToJoin />
      <Footer />
    </div>
  )
}

export default App
