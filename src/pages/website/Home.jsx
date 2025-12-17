import React from 'react'
import Hero from './sections/home-section/Hero'
import About from './sections/home-section/About'
import Services from './sections/home-section/Services'
import Testimonials from './sections/home-section/Testimonials'
import Contact from './sections/home-section/Contact'


const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home