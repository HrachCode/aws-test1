import React from 'react';
import Home from './home/home';
import Services from './services/services';
import AboutMe from './aboutMe/aboutMe';
import Contact from './contact/contact';
import Imprint from './Imprint/imprint';
import './main.css'


export default function Main (){
    return(
        <main>
            <Home />
            <Services />
            <AboutMe />
            <Contact />
            <Imprint />
        </main>
    )
}