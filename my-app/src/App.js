import './App.css';
import Headers from './Component/Header';
import LandingPage from './Component/landingPage';
import About from './Component/About';
import Projects from './Component/Projects';
import Contact from './Component/Contact'
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    document.title = "Abdirahman Ahmednur";
  }, []);

  return (
    <div>
      <Headers />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;




