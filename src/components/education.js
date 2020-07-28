import React from "react"
import { Link } from "gatsby"


//import Particles from 'react-particles-js'

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Typist from 'react-typist';


import NLogo from "../images/nyu.png";
import KgpLogo from "../images/iitkgp2.png";

import 'animate.css/animate.css'
//,backgroundImage:'linear-gradient(#912ffa, #541cfc)'
const Education = () => (
  <div >
        <div style={{textAlign:'center',color:'white',display:'relative',height:'100%',padding:'5em'}}>    
            <Fade delay={500} duration={1000} left cascade>
              <h1>Education</h1>
            </Fade>
            <div>
              <div style={{textAlign:'center'}} id="NYU">
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={NLogo} style={{width:'5%',maxWidth:'10%',minWidth:'5%',height:'auto'}} alt="New York University"/></div>
                    <div><b>New York University</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center'}}>
                  <b>Master of Science in Computer Science</b>
                  <div>Feb 2019 – Dec 2020</div>
                </div> 
                <br/>
                <div style={{textAlign: 'center'}}>
                  <p><b>Relevant Coursework:</b>Programming Languages, Operating Systems, Natural Language Processing, Computer Vision, Deep Learning</p>
                  <p style={{textAlign:'center',fontSize:'110%'}}><b>GPA:</b>&nbsp;4.0/4.0</p>
                </div>
              </div>
            </div>
            <br/>
            {/*
            * 
            * 
            * *************************** IIT KGP SECTION ****************************
            * 
            * 
            */}
            <div>
              <div style={{textAlign:'center'}} >
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={KgpLogo} style={{width:'15%',maxWidth:'15%',minWidth:'10%',height:'auto'}} alt="KIIT University"/></div>
                    <div><b>Indian Institute of Technology (IIT), Kharagpur</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center',color:'white'}}>
                  <b>Master of Technology and Bachelor of Technology in Computer Science</b>
                  <div>July 2011 – May 2016</div>
                </div>
              </div>
              <br/>
                <div style={{textAlign: 'center'}}>
                  <p style={{textAlign:'center',fontSize:'110%'}}><b>GPA:</b>&nbsp;8.65/10.0</p>
                </div>
            </div>
        </div>
  </div>
)

export default Education



