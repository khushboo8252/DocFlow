// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Sign from './pages/Sign';
import Share from './pages/Share';
import Dashboard from './pages/Dashboard';
import { DocumentProvider } from './context/DocumentContext'; // Import DocumentProvider

function App() {
  return (
    <Router>
      <DocumentProvider> {/* Wrap the app with DocumentProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/share" element={<Share />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </DocumentProvider>
    </Router>
  );
}

export default App;
