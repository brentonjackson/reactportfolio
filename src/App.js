import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About.js';
import Projects from './Projects.js'; 
import Contact from './Contact.js'; 
import './content/styles.css';
// import './App.css';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="container">
          <Navbar />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
