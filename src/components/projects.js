import React, { Component } from "react"
import ReactDOM from 'react-dom';

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import 'animate.css/animate.css'

import styled, { css } from 'styled-components'

import { media } from '../utils/style'


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";

import {Card, Icon, Image} from 'semantic-ui-react'

import PrivacyProjectLogo from "../images/privacy_project.jpg"; 
import GPUProjectLogo from "../images/gpu_project.jpg"; 
import P2PProjectLogo from "../images/p2p_project.jpg"; 
import TwitterProjectLogo from "../images/twitter_project.jpg"; 

// import {
//   BrowserRouter as Router,
//   Switch,
//   withRouter,
//   Route,
//   Link
// } from "react-router-dom";

import {Link } from "@reach/router";


import Project from "../components/project"

import Parallelizing_TSPPDF from "../data/Parallelizing_TSP.pdf";

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: 'Raleway';
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;
  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`

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
  *:focus {
      outline: none;
  }
  & > div:last-child {
    border-bottom: none !important;
  }
  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 20vw;
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
      }
    `}
`

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${media.xs`
    width: 90%;
  `}
`



var sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: false,
  focusOnSelect:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const HoverImg = styled.div`
  opacity: 1;
  filter: alpha(opacity=100);
  // transition-duration: .5s;
  transition: transform .3s ease-in-out;
	:hover {
    // opacity:0;
    // transition: opacity .2s ease-out;
    // -moz-transition: opacity .2s ease-out;
    // -webkit-transition: opacity .2s ease-out;
    // -o-transition: opacity .2s ease-out;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    transition: transform .5s ease-in-out;
	}
`
const projectsData = [
  {
    img:PrivacyProjectLogo,
    title:'Analyzing Privacy Statements through Syntactic and Semantic Role Labeling (SRL)',
    url:'APPS',
    date:'Jan 2020 - June 2020',
    github:'https://github.com/Full-Stack-Typhoon/APPS',
    description: [
      {heading: 'Abstract',text:'This paper formulates a new task of extracting privacy parameters from a privacy policy, throughthe lens of Contextual Integrity, an established social theory framework for reasoning about privacy norms. Privacy policies, written by lawyers, are lengthy and often comprise incomplete and vague statements. In this paper, we show that traditional NLP tasks, including the recently proposed Question Answering based solutions, are insufficient to address the privacy parameter extraction problem and provide poor precision and recall. We describe 4 different types of conventional methods that can be partially adapted to address the parameter extraction task with varying degrees of success: Hidden Markov Models, BERT fine-tuned models, Dependency Type Parsing (DP) and Semantic Role Labeling (SRL). Based on a detailed evaluation across 36 real-world privacy policies of major enterprises, we demonstrate that a solution combining syntactic DP coupled with type-specific SRL tasks provides the highest accuracy for retrieving contextual privacy parameters from privacy statements. We also observe that incorporating domain-specific knowledge is critical to achieving high precision and recall, thus inspiring new NLP research to address this important problem in the privacy domain.'},
      {heading: 'This work is submitted in COLING 2020.',text:'The code will be soon made public.'},
    ]
  },
  {
    img:GPUProjectLogo,
    title:'Parallelizing The Traveling Salesman Problem (TSP) on Multi-GPU system',
    date:'Sep 2019 – Dec 2019',
    url:'Parallel-TSP',
    github:'https://github.com/Full-Stack-Typhoon/Parallel-TSP',
    description: [
      {heading: 'Abstract',text:'In this paper, we describe a highly optimized approach to parallelize the 2-opt approximation algorithm for finding the solutionto Travelling Salesman Problem( TSP ). Travelling Salesman problem is a widely popular problem in computer science with applications in transport, genetics, combinatorics, mechanics and supply chain domains. The proposed implementation is highly efficient and parallel for executing it on GPU. We show that for medium size(500-1000) problems the Multi GPU based solution provides speed up of around 60 over CPU based solution.'},
      {heading: 'Project Details',text:<p>This project contains a sequential and parallel implementation of the 2-opt approximation algorithm to solve the Travelling Salesman Problem.<br/><br/>The sequential version is written in C and compiled on GCC. The parallel version is written in CUDA with compute capability of 3.5 or above.</p>},
    ],
    paperPDF:Parallelizing_TSPPDF
  },
  {
    img:P2PProjectLogo,
    title:'Hybrid Peer to Peer Network',
    date:'Aug 2018 - Dec 2018',
    url:'Hybrid-P2P-Network',
    github:'https://github.com/Full-Stack-Typhoon/Hybrid-P2P-Network',
    description: [
      {heading: 'Overview',text:'Created a P2P file sharing and chat network with a distributed Supernode for fault tolerance along with a client application. Implemented the algorithm for audio and video streaming and downloads from multiple peers.'},
    ]
  },
  {
    img:TwitterProjectLogo,
    title:'Continuous Summarization of Evolving Tweet Streams',
    date:'Jan 2016 - May 2016',
    url:'Improved-Sumblr',
    github:'https://github.com/Full-Stack-Typhoon/Improved-Sumblr',
    description: [
      {heading: '',text:<div><ul><li>Implemented an online distributed algorithm for generating summaries of related tweets cluster created using k-means algorithm.</li><li>Outperformed existing algorithms in speed by 8 times and accuracy by 10.8%.</li><li>Technologies: Python, scikit-learn, Tweepy, Flask, MongoDB, NLTK.</li></ul></div>},
      {heading: 'Overview',text:<div><ul><li>Continuous Tweet Summarization.</li><li>Continuously monitor “Apple”-related tweets arriving from the stream and produce a continuous timeline which grows by time.</li><li>The range timeline during a period giving topic evolution in those weeks.</li><li> Drill down summary or Roll up summary</li></ul></div>}
    ]
  }
];

// ReactModal.setAppElement('#main')

const inlineStyle = {
  modal : {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 100,
    position: 'absolute'
  }
};

function Projects() {
    const [open, setOpen] = React.useState(false)
    return (
      <div>
            <a id="projects"></a>
            <Section center dark>
              <h4>Projects</h4>
              <span>Some of my coolest projects.</span>
              <br/>
              <div style={{width:'60%'}}>
                <Slider {...sliderSettings}>
                      {projectsData.map(project => (
                            <div>
                                <Card style={{padding:'1em'}}>
                                  <Link to={`/project/${project.url}`}>
                                    <HoverImg>
                                        <Image
                                          src={project.img}
                                          wrapped
                                          ui={false}
                                          alt={project.title}
                                        />
                                    </HoverImg>      
                                  </Link>                          
                                  <Card.Content>
                                    <Card.Header>
                                      {project.title}
                                    </Card.Header>
                                    <Card.Meta>
                                      <span className="date">{project.date}</span>
                                    </Card.Meta>
                                  </Card.Content>
                                  <Card.Content extra>
                                    <a href={project.github} target="_blank">
                                      <Icon name="edit" size="large" color="white"/>
                                      See on GitHub
                                    </a>
                                  </Card.Content>
                                </Card>
                          </div>
                        ))}
                </Slider>
              </div>
            </Section>
      </div>
    )
}

export {projectsData};

export default Projects