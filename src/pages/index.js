import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"


// import {
//   HashRouter as Router,
//   Switch,
//   withRouter,
//   Route,
//   Link
// } from "react-router-dom";

import { Router } from "@reach/router";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Router>
        
        <Layout path="/"/>
        <Project path="/project/:projectURL"/>
        {/* <Route exact path="/about" component={AboutPage} /> */}
        <Layout default />
      </Router>
    {/* <Layout/> */}
  </div>
)

export default IndexPage
