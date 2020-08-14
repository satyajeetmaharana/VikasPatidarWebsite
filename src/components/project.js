import React from "react"


import PrivacyProjectLogo from "../images/privacy_project.jpg"; 
import GPUProjectLogo from "../images/gpu_project.jpg"; 
import P2PProjectLogo from "../images/p2p_project.jpg"; 
import TwitterProjectLogo from "../images/twitter_project.jpg"; 

import AllPagesPDFViewer from "../components/all-pages";
import SinglePagePDFViewer from "../components/single-page";


import {FaGithub} from 'react-icons/fa';
import { IconContext } from "react-icons";

import "./projectstyles.css";



import Parallelizing_TSPPDF from "../data/Parallelizing_TSP.pdf";
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
  
function checkProject(project, projectURL) {
    return project.url == projectURL;
}

const headingStyle = {
    color: "white",
    backgroundColor: "#292929",
    padding: "2%",
    fontFamily: 'Raleway',
    textAlign:"center"
};

const descriptionStyle ={
    textAlign:"justify",
    paddingLeft:"15%",
    paddingRight:"15%",
    //fontFamily: 'Raleway',
    paddingTop:"2em"
}



const descriptionHeadingStyle ={
    fontFamily: 'Raleway',
    textTransform: 'uppercase',
}


const Project = ({ projectURL }) => {
    // const projectURL = props.projectURL
    console.log('PASSED ------> ' + projectURL)
    var projectData = projectsData.filter(p => p.url === projectURL)[0];
    let pdfSource;
    console.log(projectData.paperPDF)
    if (projectData.paperPDF) {
        pdfSource = <div><h3 style={descriptionHeadingStyle}>Paper</h3><div style={{textAlign:'center'}}><SinglePagePDFViewer pdf={projectData.paperPDF} /></div></div>;
    } else {
        pdfSource = <div></div>;
    }

    return (
      <>
        <div>
            <div style={headingStyle}>
                <h2>{projectData.title}</h2>
            </div>
            <div style={descriptionStyle}>
                {projectData.description.map(p => (
                    <div>
                        <h3 style={descriptionHeadingStyle}>{p.heading}</h3>
                        <p>{p.text}</p>
                    </div>
                ))}
                <a href={projectData.github} target="_blank" className="git-icon-class">
                    <span>See on GitHub</span>
                </a>
                {pdfSource}
            </div>
            
        </div>
      </>
    );
  };




export default Project