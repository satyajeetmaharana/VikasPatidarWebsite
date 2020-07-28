import React from "react"
import { Link } from "gatsby"


//import Particles from 'react-particles-js'

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Typist from 'react-typist';


import ALogo from "../images/a4_logo_rgb.jpg";
import A2Logo from "../images/acc.png";
import DLogo from "../images/d.png";


import WorldBankLogo from "../images/worldbank.png";
import AdobeLogo from "../images/adobe.png";
import IBMLogo from "../images/ibm.png";



import 'animate.css/animate.css'
//backgroundImage:'linear-gradient(#72b5e8, #008ffc)'
const Experience = () => (
  <div >
        <div style={{textAlign:'center',color:'white',display:'relative',height:'100%',padding:'5em'}}>    
            <Fade delay={500} duration={1000} left cascade>
              <h1>Work Experience</h1>
            </Fade>
            <div>
            {/*
             * 
             * 
             * *************************** WORLD BANK EXPERIENCE ****************************
             * 
             * 
             */}
            <div>
              <div style={{textAlign:'center'}} >
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={WorldBankLogo} style={{width:'5%',maxWidth:'10%',minWidth:'5%',height:'auto'}} alt="Altice USA"/></div>
                    <div><b>World Bank</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center'}}>
                  <b>Software Development Intern</b>
                  <div>June 2020 – Aug 2020</div>
                </div> 
                <p style={{textAlign: 'justify',paddingLeft:'20%',paddingRight:'20%'}}>
                  <ul>
                    <li>Analyzed the US job market status using conversational BERT in active learning framework trained on a dataset containing 200M tweets.</li>
                    <li>Studied the employment patterns based on demographic features like age and gender using demographics package on user profiles.</li>
                    <li>Reduced the model inference time by 10 timesusing Open Neural Network Exchange (ONXX).</li>
                    <li>Extracted the relevant information (company, position, city, start date, skills) from a dataset of 15 Billion tweets. Inferred the skillset for each sector and generated a time series of job offer counts based on sector and company.</li>
                  </ul>
                </p>
              </div>
            </div>
            <br/>
             {/*
             * 
             * 
             * *************************** ADOBE INTERNSHIP EXPERIENCE ****************************
             * 
             * 
             */}
            <div>
              <div style={{textAlign:'center'}} >
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={AdobeLogo} style={{width:'5%',maxWidth:'10%',minWidth:'5%',height:'auto'}} alt="Altice USA"/></div>
                    <div><b>Adobe</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center'}}>
                  <b>Software Development Intern</b>
                  <div>June 2019 – Aug 2019</div>
                </div> 
                <p style={{textAlign: 'justify',paddingLeft:'20%',paddingRight:'20%'}}>
                  <ul>
                    <li>Implemented the very first end to end trainable Superpixel generation framework in PyTorch.</li>
                    <li>Devised a novel self supervised image segmentation algorithm based on Superpixels and Optical flow.</li>
                    <li>Enabled Deep Product Search, Smart Crop and Region Selection features to detect any object compared to limited prespecified objects.</li>
                  </ul>
                </p>
              </div>
            </div>
            <br/>
            {/*
             * 
             * 
             * *************************** ADOBE WORK EXPERIENCE ****************************
             * 
             * 
             */}
            <div>
              <div style={{textAlign:'center'}} >
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={AdobeLogo} style={{width:'5%',maxWidth:'10%',minWidth:'5%',height:'auto'}} alt="Deloitte"/></div>
                    <div><b>Adobe</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center'}}>
                  <b>Senior Member of Technical Staff</b>
                  <div>July 2016 – Aug 2018</div>
                </div> 
                <p style={{textAlign: 'justify',paddingLeft:'20%',paddingRight:'20%'}}>
                  <ul>
                    <li>Developed a web system to automatically digitize forms for clients including US federal departments reducing form creation time by 60 times.</li>
                    <li>Designed and implemented a web platform to segment and annotate form components from form images to train neural networks.</li>
                    <li>Lead the annotation process using the above platform by training and managing a team of 75, while assuring annotation quality.</li>
                    <li>Engineered heuristics for augmenting the training dataset for rare patterns resulting in a 200% increase in the training dataset size, leading to an 8% increase in the precision of the model. </li>
                    <li>Trained a specialized CNN for each form components with F1-scores above 90%.</li>
                    <li>Containerized the neural network models and created a REST API end point for fetching the aggregated output from all the models.</li>
                    <li>Implemented a microservice to heuristically merge the output of the above neural networks to generate a hierarchical form structure.</li>
                    <li>Made the system scalable using RabbitMQ for processing form conversion requests. Made the system asynchronous using WSGI.</li>
                  </ul>
                </p>
              </div>
            </div>
            <br/>
            {/*
             * 
             * 
             * *************************** IBM INTERNSHIP EXPERIENCE ****************************
             * 
             * 
             */}
            <div>
              <div style={{textAlign:'center'}} >
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={IBMLogo} style={{width:'5%',maxWidth:'10%',minWidth:'5%',height:'auto'}} alt="Accenture"/></div>
                    <div><b>IBM</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center'}}>
                  <b>Software Development Intern</b>
                  <div>May 2015 – July 2015</div>
                </div> 
                <p style={{textAlign: 'justify',paddingLeft:'20%',paddingRight:'20%'}}>
                  <ul>
                    <li>Collected management logs of the cloud workload (Application/ Container) and forwarded them to the security administrator’s log server.</li>
                    <li>Implemented a bindable service to secure applications from OWASP Top Ten vulnerabilities using Nginx as a reverse proxy.</li>
                    <li>Created a one-click interface to bind the above service to any application in IBM Bluemix.</li>
                  </ul>
                </p>
              </div>
            </div>
            <br/>
          </div>
        </div>
  </div>
)

export default Experience



