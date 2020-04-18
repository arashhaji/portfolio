import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Articles from './components/Articles';
import AddArticles from './components/AddArticles';

function App() {
 
  return (
    <>
    <CssBaseline/>
       <Route exact path="/" component={Home}/>
       <Route path="/resume" component={Resume}/>
       <Route path="/portfolio" component={Portfolio}/>
       <Route path="/contacts" component={Contacts}/>
       <Route path="/articles" component={Articles}/>
       <Route path="/addarticles" component={AddArticles}/>
    </>
  );
}

export default App;
