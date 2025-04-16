// components/DocumentCard.js

import React from 'react';

const DocumentCard = ({ name, status, fileUrl }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md">
      <h3 className="text-lg font-semibold text-black">{name}</h3>
      <p className="text-sm text-gray-600">Status: {status}</p>

      {/* Show file URL for download or preview */}
      {fileUrl && (
        <div className="mt-2">
          <a
            href={fileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View or Download Document
          </a>
        </div>
      )}
    </div>
  );
};

export default DocumentCard;
