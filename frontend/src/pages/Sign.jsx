import React, { useState, useEffect } from 'react';
import SignModal from '../components/SignModel';
import axios from 'axios';

const Sign = () => {
  const [showModal, setShowModal] = useState(false);
  const [signed, setSigned] = useState(false);
  const [documentId, setDocumentId] = useState(''); // mock or from URL

  // 👇 Replace with actual document ID logic
  useEffect(() => {
    setDocumentId('661e9e8ecbd22b42f4e76d1e'); // mock ID or use useParams()
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSign = async () => {
    try {
      const token = localStorage.getItem('token'); // ⬅️ Make sure token is stored on login

      const response = await axios.put(
        `http://localhost:5000/api/sign/${documentId}/sign`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setSigned(true);
        setShowModal(false);
        alert('Document signed successfully!');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to sign the document.');
    }
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
