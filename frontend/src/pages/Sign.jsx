import React, { useState } from 'react';
import SignModal from '../components/SignModel';

const Sign = () => {
  const [showModal, setShowModal] = useState(false);
  const [signed, setSigned] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSign = () => {
    setSigned(true);
    setShowModal(false);
    alert('Document signed successfully!');
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-2xl font-semibold mb-4">Sign Your Document</h2>

      {/* Mock document viewer */}
      <div className="border w-[60%] h-96 bg-gray-100 shadow-inner flex items-center justify-center mb-6">
        {signed ? (
          <p className="text-green-600 font-semibold text-lg">Document Signed ✅</p>
        ) : (
          <p className="text-gray-500">[Document Preview Here]</p>
        )}
      </div>

      <button
        onClick={handleOpenModal}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add Signature
      </button>

      {showModal && (
        <SignModal onClose={handleCloseModal} onSign={handleSign} />
      )}
    </div>
  );
};

export default Sign;
