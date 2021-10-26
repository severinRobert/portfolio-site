import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import CV from './pages/CV.js';
import ProfessionnalProject from './pages/ProfessionnalProject.js';
import Portfolio from './pages/Portfolio.js';

function App() {
  return (
    <Router>
    <div className="content">
      <Navbar/>
      <div className="page">
        <Switch>
            <Route path="/CV">
              <CV />
            </Route>
            <Route path="/ProfessionnalProject">
              <ProfessionnalProject />
            </Route>
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>  
    </div>
    </Router>
  );
}

export default App;
