import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About.js';
import Projects from './Projects.js'; 
import Contact from './Contact.js'; 
import './App.css';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="container">
          <Navbar />
            <Switch>
              <Route path="/" component={About} exact/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
