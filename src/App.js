import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Architecture from './pages/Architecture';
import Undergraduate from './project-pages/Undergraduate';
import ArchitecturalProject from './project-pages/ArchitecturalProject';
// import PlansSections from './project-pages/PlansSections';
// import OperaPrima from './project-pages/OperaPrima';
import SocialMedia from './pages/SocialMedia';
import CafeProject from './project-pages/CafeProject';
import GraphicDesign from './pages/GraphicDesign';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="App">
        < Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/architecture" component={Architecture} />
            <Route path="/undergraduate-project" exact component={Undergraduate} />
            {/* <Route path="/plans-sections" component={PlansSections} /> */}
            {/* <Route path="/opera-prima" component={OperaPrima} /> */}
            <Route path="/architectural-project" component={ArchitecturalProject} />
          <Route path="/social-media" component={SocialMedia} />
            <Route path="/cafe-project" component={CafeProject} />
          <Route path="/graphic-design" component={GraphicDesign} />
            <Route path="/social-media" component={SocialMedia} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}