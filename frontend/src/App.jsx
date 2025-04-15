import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Sign from './pages/Sign';
import Share from './pages/Share';
import Dashboard from './pages/Dashboard';
//import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/share" element={<Share />} />
        </Routes>
      
    </Router>
  );
}

export default App;
