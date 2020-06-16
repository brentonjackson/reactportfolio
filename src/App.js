import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import Contact from "./Contact.js";
import "./app.css";
import { AnimatePresence } from "framer-motion"



function App() {
  const location = useLocation();

  return (
      <>
        <Navbar />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} >
            <Route path="/projects" component={Projects} exact />
            <Route path="/resume" component={Resume} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/" component={About} exact />
          </Switch>
        </AnimatePresence>
        
        <Footer />
      </>
  );
}

export default App;
