
import './App.css';

import Home from './components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Shared/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
