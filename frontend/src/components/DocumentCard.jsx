import React from 'react';

const DocumentCard = ({ name, status }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">Status: {status}</p>
    </div>
  );
};

export default DocumentCard;