
import './App.css';

import Home from './components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Shared/Navbar';
import Donation from './components/Donation/Donate';
import AboutUs from './components/Home/AboutUs';
import Contract from './components/Home/Contract';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contract" element={<Contract />} />
      </Routes>
    </div>
  );
}

export default App;
