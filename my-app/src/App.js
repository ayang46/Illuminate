import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Announcement from './components/Announcement';
import AboutUs from './components/AboutUs';
import IlluminateFellowInfo from './components/IlluminateFellowInfo';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="App">
        <header className="App-header">
          </header>
          <LandingPage />
          <Announcement />
          <AboutUs />
          <IlluminateFellowInfo />
          <Benefits />
          <Testimonials />
          <FAQ />
          <Contact />
          <Routes>
            <Route path ="/info" element = {<IlluminateFellowInfo />} />
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/newpage" element={<NewPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/project" element={<ProjectPage />} /> */}
          </Routes>
    </div>
    </Router>
  );
}

export default App;
