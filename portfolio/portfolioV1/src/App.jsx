import './App.css'
import ContactUs from './components/ContactUs'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import {Container} from "@mui/material"

function App() {

  return (
    <>
      <Header/>
      <Container className='mt-24'>
      <HeroSection/>
      <Services/>
      <Projects/>
        <Testimonials />
        <ContactUs/>
      </Container>
    </>
  )
}

export default App
