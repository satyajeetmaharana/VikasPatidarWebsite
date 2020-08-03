import React from "react"


//import Particles from 'react-particles-js'

// import Fade from 'react-reveal/Fade';
// import Reveal from 'react-reveal/Reveal';
// import Typist from 'react-typist';

import 'animate.css/animate.css'


//,backgroundImage:'linear-gradient(#72b5e8, #008ffc)'
import CLogo from "../images/c.png"; 
import CPlusPlusLogo from "../images/c_plusplus.png"; 
import PythonLogo from "../images/python.png";
import ScalaLogo from "../images/scala.png";
import JavaLogo from "../images/java.png";
import JSLogo from "../images/JS.png";  
import ShellLogo from "../images/shell.png";  
import HTMLLogo from "../images/html.png";
import CSSLogo from "../images/css.png";
import SQLLogo from "../images/mysql.svg";

import AngularLogo from "../images/angular.svg"
import ReactLogo from "../images/react.png";
import FabricLogo from "../images/Fabric.js.png";
import SparkLogo from "../images/spark.png";
import PyTorchLogo from "../images/pytorch.png";
import TFLogo from "../images/tf.svg";

import OpenCVLogo from "../images/opencv.png";



import DockerLogo from "../images/docker.png";
import RabbitMQLogo from "../images/rabbitMQ.png";
import OpenStackLogo from "../images/openStack.svg";
import AWSLogo from "../images/aws.png";
import RedisLogo from "../images/redis.svg";
import NginxLogo from "../images/nginx.png";



// import { Flex, Box } from '@rebass/grid'
import styled, { css } from 'styled-components'

import { media } from '../utils/style'


const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: 'Lato';
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`

const skillsData = [
  {
    title:'Programming',
    items: 
        [
          {img: CLogo,title: 'C'},
          {img: CPlusPlusLogo,title: 'C++'},
          {img: PythonLogo,title: 'Python'},
          {img: ScalaLogo,title: 'Scala'},
          {img: JavaLogo,title: 'Java'},
          {img: JSLogo,title: 'JavaScript'},
          {img: HTMLLogo,title: 'HTML'},
          {img: CSSLogo,title: 'CSS'},
          {img: ShellLogo,title: 'Shell Scripting'},
          {img: SQLLogo,title: 'SQL'}
        ]
  },
  {
    title:'Frameworks & Technologies',
    items: 
        [
          {
            img: AngularLogo,
            title: 'AngularJS'
          },
          {
            img: ReactLogo,
            title: 'React.js'
          },
          {
            img: FabricLogo,
            title: 'Fabric.js'
          },
          {
            img: SparkLogo,
            title: 'Apache Spark'
          },
          {
            img: PyTorchLogo,
            title: 'PyTorch'
          },
          
          {
            img: TFLogo,
            title: 'Tensorflow'
          },
          {
            img: OpenCVLogo,
            title: 'OpenCV'
          }
        ]
  },
  {
    title:'Tools',
    items: 
        [
          {
            img: DockerLogo,
            title: 'Docker'
          },
          {
            img: RabbitMQLogo,
            title: 'RabbitMQ'
          },
          {
            img: OpenStackLogo,
            title: 'OpenStack'
          },
          {
            img: AWSLogo,
            title: 'AWS'
          },
          {
            img: RedisLogo,
            title: 'Redis'
          },
          {
            img: NginxLogo,
            title: 'Nginx'
          }
        ]
  }
];

const Skills = () => (
  <div >
        {/*
        <div style={{textAlign:'center',display:'relative',height:'100%',padding:'5em'}} id="Skills">    
            <Fade delay={500} duration={1000} left cascade>
              <h1>Technical Skills</h1>
            </Fade>
            <div>
            <div style={{display:'flex',paddingLeft:'10%',paddingRight:'10%',textAlign:'center'}} >
              <div style={{flex:'1'}}>
                <br/>
                <div style={{display:'flex',textAlign:'center',flexDirection:'column'}}>
                  {skillsData.map(skill => (
                    <div style={{flex:'1'}}>
                      <br/>
                      <div style={{display:'flex',flexDirection:'column'}}>
                        <div style={{flex:'1',fontSize:'130%'}}>
                          <b>{skill.title}</b>
                        </div>
                        <br/>
                        <div style={{flex:'1',padding:'10px',verticalAlign:'middle'}}>
                          <div style={{display:'flex',flexWrap:'wrap'}}>
                            {skill.items.map(tile => (
                              <div style={{flex:'1',display:'flex',flexDirection:'column',padding:'10px'}}>
                                <div style={{flex: '1 0 auto'}}>
                                  <img src={tile.img} alt={tile.title} style={{width:'auto',maxHeight:'2.5em',maxWidth:'fit-content',height:'auto'}}/>
                                  <div style={{flex: '1 0 auto'}}>{tile.title}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>*/}

        <a id="skills"></a>
        <Section center>
          <h4>Skills</h4>
          {skillsData.map(skill => (
              <div style={{flex:'1'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                  <div style={{flex:'1'}}>
                    <h6>{skill.title}</h6>
                  </div>
                  <br/>
                  <div style={{flex:'1',verticalAlign:'middle'}}>
                    <div style={{display:'flex',flexWrap:'wrap',width:'60%'}}>
                      {skill.items.map(tile => (
                        <div style={{flex:'1',display:'flex',flexDirection:'column'}}>
                          <div style={{flex: '1 0 auto',textAlign:'center'}}>
                            <img src={tile.img} alt={tile.title} style={{width:'auto',maxHeight:'2em',maxWidth:'fit-content',height:'auto'}}/>
                            <p style={{flex: '1 0 auto'}}>{tile.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              ))}
        </Section>

  </div>
)

export default Skills



