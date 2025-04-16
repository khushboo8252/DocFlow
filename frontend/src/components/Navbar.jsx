import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 relative flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link to="/">DocuFlow</Link>
      </div>

      {/* Center Nav Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 space-x-6">
        <Link to="/upload" className="hover:underline">Upload</Link>
        <Link to="/sign" className="hover:underline">Sign</Link>
        <Link to="/share" className="hover:underline">Share</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </div>

      {/* Right side Auth Buttons */}
      <div className="space-x-4">
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
