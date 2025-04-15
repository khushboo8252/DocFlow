import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">DocuFlow</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/sign">Sign</Link>
        <Link to="/share">Share</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;