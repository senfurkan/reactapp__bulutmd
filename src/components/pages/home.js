import React from 'react'
import '../../App.css';
import HeroSection from '../heroSection';
import Cards from '../SelectionScreen';
import Footer from '../footer';

function home() {
  return (
    <>
        <HeroSection />
        <Cards />
        <Footer />
    </>
  )
}

export default home