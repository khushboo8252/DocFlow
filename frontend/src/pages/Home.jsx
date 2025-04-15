import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  

  return (
    <div className="mt-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to DocuFlow</h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Upload, sign, and share documents securely and effortlessly.
      </p>

      {/* Quick Actions */}
      <div className="flex justify-center gap-6 mb-10">
        <Link to="/upload">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Upload Document
          </button>
        </Link>
        <Link to="/sign">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Sign Document
          </button>
        </Link>
        <Link to="/share">
          <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">
            Share Document
          </button>
        </Link>
      </div>

     
    </div>
  );
};

export default Home;
