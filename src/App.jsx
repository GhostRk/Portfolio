import React from 'react'
import Navbar from "./sections/Navbar";
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Contact from './sections/Contact';
import emailjs from '@emailjs/browser';
import Footer from './sections/Footer';

emailjs.init("Zh0oeV1bbhy3H2oua"); // Your Public Key

export const App = () => {
  return (
    
       <div className="container mx-auto max-w-full">

        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      
        
       
      
        {/* footer */}



       </div>
    
    
   
  )
}

export default App;


