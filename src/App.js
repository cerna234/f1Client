import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from "./Pages/Home"
import Sponsors from "./Pages/Sponsors"
import Teams from "./Pages/Teams"
import AllDrivers from "./Pages/AllDrivers"
import NavBar from './components/Navbar.js';
import Driver from './components/DriverComponents/Driver';
import Circuits from './Pages/Circuits';
import Footer from "./components/Footer"
import ScrollToTop from './components/ScrollToTop';
import Team from "./components/Team"



function App() {
  return (
    <div className="App">

      <Router>
      <NavBar/>

        <ScrollToTop>

       
        <Routes>

            
            <Route path="/" exact element={<Home/>} />
            <Route path="/sponsors" exact element={<Sponsors/>} />
            <Route path="/allDrivers" exact element={<AllDrivers/>}/>
            <Route path="/teams" exact element={<Teams/>}/>
            <Route path="/Circuits" exact element={<Circuits/>}/>
            <Route path="/drivers/driverById/:id" exact element={<Driver/>} />
            <Route path="/teams/:id" exact element={<Team/>} />
         
         
            
        </Routes>

        </ScrollToTop>

        <Footer/>

      </Router>
     
    </div>
  );
}

export default App;
