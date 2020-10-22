import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
// import { AnimatePresence } from "framer-motion"

// const Navbar = lazy(() => import('./Navbar'));
// const Footer = lazy(() => import('./Footer'));
// const About = lazy(() => import('./About'));
// const Projects = lazy(() => import('./Projects'));
// const Resume = lazy(() => import('./Resume'));
// const Contact = lazy(() => import('./Contact'));

import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import Contact from "./Contact.js";

function App() {
  // const location = useLocation();

  return (
    <>
      <Navbar />
      {/* <AnimatePresence exitBeforeEnter initial={false}> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        <Route path="/projects" component={Projects} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/" component={About} exact />
      </Switch>
      {/* </Suspense> */}
      {/* </AnimatePresence> */}

      <Footer />
    </>
  );
}

export default App;
