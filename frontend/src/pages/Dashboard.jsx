// pages/Dashboard.js

import React from 'react';
import DocumentCard from '../components/DocumentCard'; // Assuming you have a DocumentCard component
import { useDocuments } from '../context/DocumentContext'; // Import the custom hook

const Dashboard = () => {
  const { documents } = useDocuments(); // Access documents from context

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Document Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.length > 0 ? (
          documents.map((doc, i) => (
            <DocumentCard 
              key={i} 
              name={doc.name} 
              status={doc.status} 
              fileUrl={doc.fileUrl} // Pass the file URL here
            />
          ))
        ) : (
          <p>No documents uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
