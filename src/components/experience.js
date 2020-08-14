import React from "react"
import { Link } from "gatsby"


//import Particles from 'react-particles-js'

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Typist from 'react-typist';

import WorldBankLogo from "../images/worldbank.png";
import AdobeLogo from "../images/adobe.png";
import IBMLogo from "../images/ibm.png";



import 'animate.css/animate.css';


import { Flex, Box } from '@rebass/grid'
import styled, { css } from 'styled-components'

import { media } from '../utils/style';

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
    // color: #666;
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
        color: #fefefe;
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
  &:hover {
    cursor: pointer;
    color: #DAA520 !important;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    // color: #666;
    margin-bottom: 24px;
    opacity: 0.5;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
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
    overflow:'auto',
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
function Experience() {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [openWorldBank, setOpenWorldBank] = React.useState(false);
  const [openAdobeIntern, setOpenAdobeIntern] = React.useState(false);
  const [openAdobeFTE, setOpenAdobeFTE] = React.useState(false);
  const [openIBMIntern, setOpenIBMIntern] = React.useState(false);

  const handleOpen = (name) => {
    console.log(name)
    if(name === 'WORLDBANK'){
      setOpenWorldBank(true);
    }
    if(name === 'ADOBEINTERN'){
      setOpenAdobeIntern(true);
    }
    if(name === 'ADOBEFTE'){
      setOpenAdobeFTE(true);
    }
    if(name === 'IBMINTERN'){
      setOpenIBMIntern(true);
    }
  };

  const handleClose = (name) => {
    console.log(name)
    if(name === 'WORLDBANK'){
      setOpenWorldBank(false);
    }
    if(name === 'ADOBEINTERN'){
      setOpenAdobeIntern(false);
    }
    if(name === 'ADOBEFTE'){
      setOpenAdobeFTE(false);
    }
    if(name === 'IBMINTERN'){
      setOpenIBMIntern(false);
    }
  };


  const headingWorldBank = (
    <div>
        <span>JUNE 2020 – CURRENT</span>
        <h5>WORLD BANK</h5>
        <p>Software Engineering Intern</p>
    </div>
  );

  const headingAdobeIntern = (
    <div>
        <span>JUNE 2019 - AUG 2019</span>
        <h5>ADOBE</h5>
        <p>Software Engineering Intern</p>
    </div>
  );


  const headingAdobeFTE = (
    <div>
        <span>JULY 2016 - AUG 2018</span>
        <h5>ADOBE</h5>
        <p>Senior Software Engineer</p>
    </div>
  );

  const headingIBMIntern = (
    <div>
        <span>MAY 2015 - JULY 2015</span>
        <h5>IBM</h5>
        <p>Software Engineering Intern</p>
    </div>
  );

  const bodyWorldBank = (
    <div style={modalStyle} className={classes.paper}>
      <ModalDiv>
        {headingWorldBank}
        <p id="simple-modal-description">
          <ul>
            <li>Developed a methodology to infer the employment status of <b>15M Twitter users</b> using conversational BERT in an active learning framework.</li>
            <li>Inferred the demographic characteristics of Twitter users based on their profile picture and name.</li>
            <li>Reduced the model inference time by <b>10 times</b> using Open Neural Network Exchange (ONNX).</li>
            <li>Classified the job offers on Twitter by sector and geography using name entity recognition.</li>
          </ul>
        </p>
      </ModalDiv>
    </div>
  );
  
  const bodyAdobeIntern = (
    <div style={modalStyle} className={classes.paper}>
      <ModalDiv>
        {headingAdobeIntern}
        <p id="simple-modal-description">
          <ul>
            <li>Implemented the <b>very first PyTorch version</b> of an end to end trainable <a href="https://cran.r-project.org/web/packages/OpenImageR/vignettes/Image_segmentation_superpixels_clustering.html" target="_blank">Superpixel</a> generation framework.</li>
            <li>Devised a novel self supervised image segmentation algorithm based on Superpixels and Optical flow.</li>
            <li>Enabled features such as <b>Deep Product Search, Smart Crop</b> and <b>Region Selection</b> in <b>Adobe Photoshop</b> to detect any object as compared to a limited number of supervised objects beforehand.</li>
          </ul>
        </p>
      </ModalDiv>
    </div>
  );


  const bodyAdobeFTE = (
    <div style={modalStyle} className={classes.paper}>
      <ModalDiv>
        {headingAdobeFTE}
        <p id="simple-modal-description">
          <ul>
          <li>Developed a web system to <b>automatically digitize forms</b> for clients (<b>US federal departments</b>), reducing form creation time by <b>70 times</b>.</li>
          <li>Implemented a <b>web tagging tool</b> to segment and annotate form entities from <b>2M form images</b> to build training dataset for neural networks.</li>
          <li>Lead the annotation process using the above platform by  training and <b>managing a team of 75</b>, while assuring annotation quality.</li>
          <li>Engineered heuristics for augmenting the training dataset for rare patterns resulting in a <b>200% increase</b> in the training dataset size, leading to an <b>8% increase</b> in the precision of the model. Also trained a specialized CNN for each form components with F1-scores above 90%.</li>
          <li>Exposed Tensorflow models as an <b>asynchronous microservice</b> using <b>RabbitMQ</b> and <b>WSGI</b>.</li>
          <li>Implemented a <b>microservice</b> to heuristically merge the output of the above neural networks to generate a hierarchical form structure.</li>
          </ul>
        </p>
      </ModalDiv>
    </div>
  );


  const bodyIBMIntern = (
    <div style={modalStyle} className={classes.paper}>
      <ModalDiv>
        {headingIBMIntern}
        <p id="simple-modal-description">
          <ul>
          <li>Implemented a <b>bindable service</b> to secure applications from <b>OWASP Top Ten vulnerabilities</b> using <b>Nginx</b> as a reverse proxy.</li>
          <li>Created a <b>one-click interface</b> to bind the above service to any application in IBM Bluemix.</li>
          </ul>
        </p>
      </ModalDiv>
    </div>
  );
  
  return (
    <div>
      <a id="experience"></a>
      <Section center>
        <h4>Experience</h4>
        <Item onClick={() => handleOpen('WORLDBANK')}>
            {headingWorldBank}
        </Item>
        <Item onClick={() => handleOpen('ADOBEINTERN')}>
            {headingAdobeIntern}
        </Item>
        <Item onClick={() => handleOpen('ADOBEFTE')}>
            {headingAdobeFTE}
        </Item>
        <Item onClick={() => handleOpen('IBMINTERN')}>
            {headingIBMIntern}
        </Item>
      </Section>

      <div>
        <Modal
          open={openWorldBank}
          onClose={() => handleClose('WORLDBANK')}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {bodyWorldBank}
        </Modal>

        <Modal
          open={openAdobeIntern}
          onClose={() => handleClose('ADOBEINTERN')}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {bodyAdobeIntern}
        </Modal>

        <Modal
          open={openAdobeFTE}
          onClose={() => handleClose('ADOBEFTE')}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {bodyAdobeFTE}
        </Modal>

        <Modal
          open={openIBMIntern}
          onClose={() => handleClose('IBMINTERN')}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {bodyIBMIntern}
        </Modal>
      </div>
    </div>
  );
}

export default Experience



