import React from 'react';

const SignModal = ({ onClose, onSign }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Sign Document</h2>
        <button
          onClick={onSign}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Signature
        </button>
        <button
          onClick={onClose}
          className="ml-2 text-red-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SignModal;