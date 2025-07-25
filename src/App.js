import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={5} country="US" category="general" />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="US" category="entertainment" />}/>
          <Route exact path="/business" element={<News key="business" pageSize={5} country="US" category="business" />}/>
          <Route exact path="/health" element={<News key="health" pageSize={5} country="US" category="health" />}/>
          <Route exact path="/science" element={<News key="science" pageSize={5} country="US" category="science" />}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={5} country="US" category="sports" />}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={5} country="US" category="technology" />}/>
        </Routes>
      </>
    )
  }
}

