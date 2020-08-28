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
import SelfDrivingProjectLogo from "../images/self_driving.png";
import BERTProjectLogo from "../images/BERT.png";
import TwitterCricketProjectLogo from "../images/TwitterCricket.png"

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
  },
  {
    img:SelfDrivingProjectLogo,
    title:'Prediction and Policy-learning Under Uncertainty (Self Driving Cars)',
    date:'Jun 2020 – Present',
    url:'policy-learning-self-driving',
    github:'',
    description: [
      {heading: 'Overview',text:<div><ul><li>Training a self-driving agent to plan its own trajectory in highly dense traffic using a dedicated cost term for uncertainty regularization.</li><li>The agent is simulated over a set of episodes with thecurrent success rateof car surviving the next 3 seconds being <b>82%</b>.</li><li>Currently working on clustering/classifying the episodes based on different criteria like cost, difficulty etc. for failed cases(the agent crashes or goes off-road), using a visualization tool in order to improve the agent policy.</li></ul></div>}
    ]
  },
  {
    img:BERTProjectLogo,
    title:'Evaluating Semantic consistencies of BERT for Targeted Aspect Based Sentiment Analysis (TABSA)',
    date:'Feb 2020 - June 2020',
    url:'BERT-Semantic-Inconsistenices',
    github:'https://github.com/Full-Stack-Typhoon/BERT-Semantic-Inconsistenices',
    description: [
      {heading:'Abstract',text:<div>Transformers like BERT (Devlin et al., 2018), RoBERTa (Liu et al., 2019) have been fine-tuned for supervised tasks with state of the art results. In this paper, we analyze if providing more contextual information leads to better accuracy in BERT fine-tuned sentence-pair classification models for the targeted aspect based sentiment analysis task (TABSA) (Sunet al., 2019). Our results on the Senti-Hood and SemEval 2014 Task-4 datasets show that the BERT fine-tuned models do not perform consistently with increase in context size and have a range of up to 6% and 3% in F1 accuracy variations respectively. Further, our analysis shows severe inconsistencies with more than 25% of test samples predictions getting inverted with increase in context size. This work is submitted in EMNLP 2020.</div>},
      {heading: 'Overview',text:<div><ul><li>Evaluated BERT fine-tuned sentence-pair classification models for the TABSA task for different context sizes around the target</li><li>Found that the BERT fine-tuned modelsdo not perform consistently with increase in context size and had a drop of 6% in Aspect F1 scores on the Senti-Hood dataset.</li><li>Our analysis showed severe inconsistencies with more than 25% of test samples predictions getting inverted with increase in context size.</li><li>Indicates the need of regularization to avoid inconsistencies while fine-tuning a large pre-trained language model on a small dataset.</li></ul></div>}
    ]
  },
  {
    img:SelfDrivingProjectLogo,
    title:'Generating Bird’s-Eye View from Multi-View Scenes for Self-Driving Cars',
    date:'Feb 2020 - May 2020',
    url:'Autonomous-Driving',
    github:'https://github.com/Full-Stack-Typhoon/Autonomous-Driving',
    description: [
      {heading:'Abstract',text:<div>This work talks about an easy and effective approach to address a very challenging and interesting task of road layout estimation in complex driving environment. From six camera images encompassing the whole 360° view, we try to predict the bird’s-eye-view of the road and surrounding objects of the ego car. We present an effective generic approach to handle both the tasks by reducing each of them to an Instance segmentation problem. Further by leveraging the unlabeled dataset and data augmentation techniques, we estimate depth in an unsupervised manner. Finally using pretrained depth and novel architectures, we accurately generate bird’s-eye-view of a scene.</div>},
      {heading: 'Overview',text:
        <div>
          <ul>
            <li>Generated bird's-eye view of the road layout, vehicles and pedestrians from 6 cameras mounted on a car encompassing a 360-degree view.</li>
            <li>Reduced the tasks to <b>Instance Segmentation</b> problems and solved them by creating a novel DL architecture with custom loss functions.</li>
            <li>Added <b>Monodepth</b> features using Self-supervised learning by leveraging the temporal aspect of the large number of unlabeled videos.</li>
            <li>Achieved an <b>improvement in IOU of 13</b> over the baseline model for the road layout generation task on the Lyft dataset.</li>
          </ul>
        </div>}
    ]
  },
  {
    img:TwitterCricketProjectLogo,
    title:'Twitter Cricket Tracker and Automatic Highlight Generator from Textual Commentary',
    date:'Aug 2014 - Nov 2014',
    url:'Sentiment-Analysis-Cricket-Tweets',
    github:'https://github.com/Full-Stack-Typhoon/Sentiment-Analysis-Cricket-Tweets',
    description: [
      {heading:'Abstract',text:<div>Popularity and Qualitative Performance tracker of players and teams over time using sentiment analysis of tweets</div>},
      {heading: 'Overview',text:
        <div>
          Created a popularity and qualitative performance tracker of players and teams over time from over 2 million tweets with relevant hashtags. Programmed an automatic highlight generator from textual commentary crawled and scraped from cricket websites. Engineered features using handmade dictionaries and created classification models for computing sentiment and generating highlights. Best project award for the Natural Language Processing course funded by Yahoo.
          <ul>
            <li>Created a <b>popularity and qualitative performance tracker</b> of players and teams over time from over <b>2 million</b> filtered tweets.</li>
            <li>Programmed an <b>automatic highlight generator</b> from textual commentary, crawled and scraped from cricket websites.</li>
            <li><b>Engineered features</b> using handmade dictionaries and created classification models for computing sentiment and generating highlights.</li>
            <li><b>Best project award</b> for the Natural Language Processing course sponsored by <b>Yahoo</b>.</li>
          </ul>
        </div>}
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