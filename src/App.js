import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0)

    return (
      <>
        <LoadingBar
          color="#f11946"
          progress={progress}
        />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="US" category="general" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="US" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="US" category="business" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="US" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="US" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="US" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="US" category="technology" />} />
        </Routes>
      </>
    )
}

export default App;

