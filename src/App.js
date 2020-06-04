import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import Contact from "./Contact.js";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="container">
          <Navbar />
          <Switch>
            <Route path="/" component={About} exact />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
