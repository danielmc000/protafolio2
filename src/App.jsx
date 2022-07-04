import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Portafolio from './components/portafolio/portafolio';
import Contact from './components/contact/contact';
import Services from './components/services/services';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portafolio/>    
    <Contact/>
    <Footer/>
    </>
  )
}

export default App