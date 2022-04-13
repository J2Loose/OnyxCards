import React from 'react';
import Footer from './FooterN';
import Navbar from '../Navbar';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './InfoSection/Data';



const LandingPage = (props) => {
    

    return (
        <>
            <Navbar />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
            <Footer />
        </>
    )
}



export default LandingPage;
