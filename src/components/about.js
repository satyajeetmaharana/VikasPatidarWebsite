import React from "react"
import { Link } from "gatsby"


//import Particles from 'react-particles-js'

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Typist from 'react-typist';

import 'animate.css/animate.css'
//,backgroundImage:'linear-gradient(#51cf96, #28bf7b)'
const About = () => (
  <div>
        <div style={{textAlign:'center',color:'white',display:'relative',marginTop:'40em',height:'100%',padding:'5em',zIndex:'400'}}>    
            <Fade delay={500} duration={1000} left cascade>
              <h1>About Me</h1>
            </Fade>
            <div>
              <p><Typist>A computer science enthusiast, who loves to accomplish complex tasks in simpler ways.</Typist></p>
            </div>
        </div>
  </div>
)

export default About



