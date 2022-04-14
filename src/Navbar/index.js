import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavBarElements'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false)

    //constant used for the navbar background change. Checks if the user has scroll a certain distance downwards
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    //event listener to react when the user scrolls
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    //sends the user back to the top of the landing page
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
      <>
        {/* Navbar function making use of the styled components module. Which is why the tag names look a bit weird */}
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo  onClick={toggleHome}>
                    OnyxCards
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    {/* Smooth scroll is used here for the seamless transition between sections */}
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='security' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Security</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    )
}

export default Navbar
