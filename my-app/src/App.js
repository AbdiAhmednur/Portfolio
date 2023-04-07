import './App.css';
import Headers from './Component/Header';
import LandingPage from './Component/landingPage';
import About from './Component/About';
import Projects from './Component/Projects';
import Contact from './Component/Contact'

function App() {
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
