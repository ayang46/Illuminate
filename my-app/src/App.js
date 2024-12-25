import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Announcement from './components/Announcement';
import AboutUs from './components/AboutUs';
import IlluminateFellowInfo from './components/IlluminateFellowInfo';

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
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/newpage" element={<NewPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/project" element={<ProjectPage />} />
          </Routes> */}
    </div>
    </Router>
  );
}

export default App;
