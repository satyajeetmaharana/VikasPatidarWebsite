import React from "react"
import { Link } from "gatsby"


//import Particles from 'react-particles-js'

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Typist from 'react-typist';

import 'animate.css/animate.css'
//,backgroundImage:'linear-gradient(#3cc79d, #6bfacf)'
const Projects = () => (
  <div >
        <div style={{textAlign:'center',color:'white',display:'relative',height:'100%',padding:'5em'}}>    
            <Fade delay={500} duration={1000} left cascade>
              <h1>Projects</h1>
            </Fade>
            {/* 
            *
            *     ----------------------- Privacy Project --------------------------
            *
            */}
            <div>
              <div style={{textAlign:'center'}}>
                  <b>Analyzing Privacy Statements through Syntactic and Semantic Role Labeling (SRL)</b>
                  <div>Jan 2020 - June 2020</div>
                </div> 
              <p style={{textAlign: 'justify',paddingLeft:'20%',paddingRight:'20%'}}>
                <ul>
                <li>Automated the extraction of the five parameters ofContextual Integrityfrom large privacy policies.</li>
                <li>Pioneered the task with anovel approachusing syntactic Dependency Parsing and type-specific SRL along with domain-specific rules.</li>
                <li>Achieved a 10% improvement in F1-score over the current best models on 36 real-world privacy policies of major enterprises.</li>
                <li>Technologies: Python, PyTorch, AllenNLP, Gensim, NLTK, spaCy, Flask, SQLite</li>
                </ul>
              </p>
            </div>


            {/* 
            *
            *     ----------------------- Parallelizing The Traveling Salesman Problem (TSP) on Multi-GPU system Project --------------------------
            *
            */}
            <div>
              <div style={{textAlign:'center'}}>
                  <b>Parallelizing The Traveling Salesman Problem (TSP) on Multi-GPU system</b>
                  <div>Sep 2019 – Dec 2019</div>
                </div> 
              <p style={{textAlign: 'justify',paddingLeft:'20%',paddingRight:'20%'}}>
                <li>Parallelized the 2-opt approximation algorithm through a highly optimized approach to get a speedup of 60 times on GPU over CPU.</li>
                <li>Technologies: C, CUDA</li>
              </p>
            </div>



            {/* 
            *
            *     ----------------------- Hybrid Peer to Peer Network Project --------------------------
            *
            */}
            <div>
              <div style={{textAlign:'center'}}>
                  <b>Hybrid Peer to Peer Network</b>
                  <div>Aug 2018 - Dec 2018</div>
                </div> 
              <p style={{textAlign: 'justify',paddingLeft:'20%',paddingRight:'20%'}}>
                <li>Created a P2P file sharing and chat network with a distributed Supernode for fault tolerance along with a client application.</li>
                <li>Implemented the algorithm for audio and video streaming and downloads from multiple peers.</li>
                <li>Technologies: Python, WebSocket, Flask, SQLite, MD5, Redis</li>
              </p>
            </div>

            {/* 
            *
            *     ----------------------- Continuous Summarization of Evolving Tweet Streams Project --------------------------
            *
            */}
            <div>
              <div style={{textAlign:'center'}}>
                  <b>Continuous Summarization of Evolving Tweet Streams</b>
                  <div>Jan 2016 - May 2016</div>
                </div> 
              <p style={{textAlign: 'justify',paddingLeft:'20%',paddingRight:'20%'}}>
                <li>Implemented anonline distributed algorithmfor generating summaries of related tweets cluster created using k-means algorithm.</li>
                <li>Outperformed existing algorithms in speed by 8 times and accuracy by 10.8%.</li>
                <li>Technologies: Python, scikit-learn, Tweepy, Flask, MongoDB</li>
              </p>
            </div>
           
        </div>
  </div>
)

export default Projects



