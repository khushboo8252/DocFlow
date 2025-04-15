import React, { useState } from 'react';

const Share = () => {
  const [link, setLink] = useState('');
  const [copied, setCopied] = useState(false);

  const generateLink = () => {
    const mockLink = `https://docuflow.app/doc/12345/share/${Math.random().toString(36).substr(2, 8)}`;
    setLink(mockLink);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-2xl font-semibold mb-4">Share Your Document</h2>

      <button
        onClick={generateLink}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mb-6"
      >
        Generate Shareable Link
      </button>

      {link && (
        <div className="w-full max-w-xl px-4">
          <div className="bg-gray-100 border rounded p-4 flex justify-between items-center shadow">
            <span className="truncate text-sm">{link}</span>
            <button
              onClick={copyToClipboard}
              className="ml-4 text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
