// App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Navbar from '../componants/Navbar.jsx';
import News from '../componants/News.jsx';

const App = ({ category = 'general' }) => {
  const [mode, setMode] = useState("light");
  const [modemsg, setModemsg] = useState("Enable Dark Mode");
  const [color, setTextcolor] = useState("black");
  const [progress, setProgress] = useState(0);

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#212529';
      setModemsg("Enable Light Mode");
      setTextcolor("white");
    } else {
      setModemsg("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      setMode('light');
      setTextcolor("black");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} togglemode={toggleMode} togglemsg={modemsg} textcolor={color} />
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={1}
          className="position-fixed top-0 start-0 end-0"
          style={{ height: '5px' }}
        />
        <div className="container-fluid px-0">
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="in" category={category} />} />
            <Route path="/sports" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="sports" />} />
            <Route path="/business" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="science" />} />
            <Route path="/technology" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="technology" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;