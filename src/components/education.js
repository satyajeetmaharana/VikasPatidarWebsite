import React from "react"
import { Link } from "gatsby"


//import Particles from 'react-particles-js'

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import { Flex, Box } from '@rebass/grid'
import styled, { css } from 'styled-components'

import { media } from '../utils/style'

import NLogo from "../images/nyu.png";
import KgpLogo from "../images/iitkgp2.png";

import 'animate.css/animate.css'


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


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
    //color: #666;
  }

  h1,
  h2,
  h3,
  h4,
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
    // color: #666;
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
        //color: #eee;
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
        //color: #fefefe !important;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h5 {
    text-rendering: optimizeLegibility;
    font-size: 0.81225rem;
    line-height: 1.1;
    font-family: 'Raleway';
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  &{
    color: #fefefe
  }
  &:hover {
    cursor: pointer;
    color: #DAA520 !important;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    //color: #666;
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




function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60%',
    height: 'auto',
    maxHeight:500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalDiv = styled.div`
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h5 {
    text-rendering: optimizeLegibility;
    font-size: 0.81225rem;
    line-height: 1.1;
    font-family: 'Raleway';
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    //color: #666;
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


function Education() {

  const classes = useStyles();
  
  const [modalStyle] = React.useState(getModalStyle);
  const [openNYU, setOpenNYU] = React.useState(false);
  const [openIIT, setOpenIIT] = React.useState(false);

  const handleOpen = (name) => {
    console.log(name)
    if(name === 'NYU'){
      setOpenNYU(true);
    }
    if(name === 'IIT'){
      setOpenIIT(true);
    }
    // setOpen(true);
  };

  const handleClose = (name) => {
    console.log(name)
    if(name === 'NYU'){
      setOpenNYU(false);
    }
    if(name === 'IIT'){
      setOpenIIT(false);
    }
    // setOpen(false);
  };

  const headingNYU = (
    <div>
      <span>FEB 2019 – DEC 2020</span>
      <h5 id="simple-modal-title">New York University</h5>
      <p>Master of Science in Computer Science</p>
    </div>
  );

  const headingIIT = (
    <div>
      <span>JULY 2011 – MAY 2016</span>
      <h5>INDIAN INSTITUTE OF TECHNOLOGY (IIT), KHARAGPUR</h5>
      <p>Master of Technology and Bachelor of Technology in Computer Science</p>
    </div>
  );

  const bodyNYU = (
    <div style={modalStyle} className={classes.paper}>
      <ModalDiv>
        {headingNYU}
          <p id="simple-modal-description">
          <ul>
          <li><b>GPA: </b>4.0/4.0</li>
          <li><b>Coursework: </b>Programming Languages, Operating Systems, Distributed Systems, Natural Language Processing, Computer Vision</li>
          <li><b>Positions: </b>Adjunct Faculty for Graduate Fundamental Algorithms, Graduate Student Researcher with Prof. Yann LeCun</li>
          </ul>
        </p>
      </ModalDiv>
    </div>
  );
  
  const bodyIIT = (
    <div style={modalStyle} className={classes.paper}>
      <ModalDiv>
        {headingIIT}
        <p id="simple-modal-description">
          <ul>
          <li><b>GPA: </b>8.65/10.0</li>
          </ul>
        </p>
      </ModalDiv>
    </div>
  );

  return (<div > 
    <a id="experience"></a>
    <Section center dark>
      <h4>Education</h4>
      <Item onClick={() => handleOpen('NYU')}>
        {headingNYU}
      </Item>
      <Item onClick={() => handleOpen('IIT')}>
        {headingIIT}
      </Item>
    </Section>

    <div>
      <Modal
        open={openNYU}
        onClose={() => handleClose('NYU')}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyNYU}
      </Modal>

      <Modal
        open={openIIT}
        onClose={() => handleClose('IIT')}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyIIT}
      </Modal>

    </div>

</div>);
}

export default Education



