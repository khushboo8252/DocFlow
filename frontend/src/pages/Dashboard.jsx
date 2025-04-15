import React from 'react';
import DocumentCard from '../components/DocumentCard';

const Dashboard = () => {
  const documents = [
    { name: 'Contract_A.pdf', status: 'Signed' },
    { name: 'Agreement_B.pdf', status: 'Pending' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Document Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc, i) => (
          <DocumentCard key={i} {...doc} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;