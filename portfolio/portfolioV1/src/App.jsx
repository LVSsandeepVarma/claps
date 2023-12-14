import './App.css'
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
      <Container>
      <HeroSection/>
      <Services/>
      <Projects/>
      <Testimonials/>
      </Container>
    </>
  )
}

export default App
