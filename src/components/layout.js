import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from 'react-responsive'

import Particles from 'react-particles-js'

import Image from "../components/image"
import { Link } from "gatsby"

import About from "../components/about"
import Education from "../components/education"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Skills from "../components/skills"

import ScrollAnimation from 'react-animate-on-scroll';


import Fade from 'react-reveal/Fade';

import { AnimatedBg, Transition } from 'scroll-background';

import {FaLinkedin,FaGithubSquare,FaEnvelope } from 'react-icons/fa';
import { IconContext } from "react-icons";

import styled, { css } from 'styled-components'
import "../utils/layout.css"

import "animate.css/animate.min.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };


  const IconsDiv = styled.div`
    a{
      color:black;
    }
    a:hover{
      color: #DAA520;
    }
  `

  return (
    <>
      <div style={{position:'relative'}}>
           <div>
                <div style={{textAlign:'center',display:'relative',top:'0',paddingTop:'30em',height:'100%',paddingBottom:'40em'}}>    
                    <Fade delay={500} duration={1000} left cascade>
                      <div  style={{fontSize:'4em',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Vikas Patidar</div>
                    </Fade>
                    
                    <IconContext.Provider value={{size:'2em'}} >
                      <Fade right big cascade >
                        <IconsDiv>
                          <a href="https://linkedin.com/in/vikas-patidar" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hello"/></a>&nbsp;&nbsp;
                          <a href="https://github.com/Full-Stack-Typhoon" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>&nbsp;&nbsp;
                          <a href="mailto:vikaspatidar859@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope/></a>
                        </IconsDiv>
                      </Fade>
                    </IconContext.Provider>
                  
                </div>
          </div>
          <div>
            <About/>
          </div>
          <div>
            <Education/>
          </div>
          <div>
            <Experience/>
          </div>
          <div>
            <Projects/>
          </div>
          <div>
            <Skills/>
          </div>
      </div>   
      {/*
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={0}
        classNames="NavAnimation"
        unmountOnExit
      >
        <div>
          <div style={{position: 'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)',textAlign: 'center'}}>
              <div style={{fontSize:'4em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Hi, I'm Satyajeet.</div>
              <div style={{fontSize:'1em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Software Engineer | New York City</div>
              <div>
               
                </div>
            </div>
          <div className="bounce" style={{position:'absolute',top:'90%',left:'50%',transform:'translate(-50%,-50%)', textAlign:'center'}}>

          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSmallScreen || isNavVisible}
        timeout={0}
        classNames="NavAnimation"
        unmountOnExit
      >
        <div>
          <div style={{position:'absolute',paddingBottom:'50%',left:'50%',transform:'translate(-50%,-50%)', textAlign:'center'}}>
              <div  style={{fontSize:'1.5em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Hi, I'm Satyajeet.</div>
              <div style={{fontSize:'1em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Software Engineer | New York City</div>
              {/*<IconContext.Provider value={{size:'2em',className:'contact-icons-top'}}>
                  <div>
                    <a href="https://www.linkedin.com/in/satyajeetmaharana/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>&nbsp;&nbsp;
                    <a href="https://github.com/satyajeetmaharana" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>&nbsp;&nbsp;
                    <a href="mailto:satyajeet@nyu.edu" target="_blank" rel="noopener noreferrer"><FaEnvelope/></a>
                  </div>
                </IconContext.Provider>
          </div>
        </div>
              </CSSTransition>*/}
      {/*
      <Tablet>
        <div>
          <Navbar/>
        </div>
        <div style={{position:'absolute',top:'20%',left:'50%',transform:'translate(-50%,-50%)', textAlign:'center'}}>
            <div  style={{fontSize:'3em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Hi, I'm Satyajeet.</div>
            <div style={{fontSize:'1em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Software Engineer | New York City</div>
          <IconContext.Provider value={{size:'2em',className:'contact-icons-top'}}>
            <div>
              <a href="https://www.linkedin.com/in/satyajeetmaharana/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>&nbsp;&nbsp;
              <a href="https://github.com/satyajeetmaharana" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>&nbsp;&nbsp;
              <a href="mailto:satyajeet@nyu.edu" target="_blank" rel="noopener noreferrer"><FaEnvelope/></a>
            </div>
          </IconContext.Provider>
        </div>
      </Tablet>*/}
      
      <div
        style={{
          margin: `0 auto`,
          position:'relative',
          //maxWidth: 1100,
          //padding: `5rem`,
          width:'100%',
          //border:'1px solid gray',
          //boxShadow: '1px 1px 8px gray',
          backgroundColor:'white'
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout