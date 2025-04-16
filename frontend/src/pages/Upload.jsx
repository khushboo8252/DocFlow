// UploadForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useDocuments } from '../context/DocumentContext';

const Upload = () => {
  const [file, setFile] = useState(null);
  const { addDocument } = useDocuments();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token'); // Or however you store it
      const res = await axios.post('http://localhost:5000/api/documents/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      const newDocument = {
        name: file.name,
        status: 'Pending',
        fileUrl: res.data.fileUrl, // Assuming the file URL is returned by the server
      };

      addDocument(newDocument);
      alert('Uploaded!');
    } catch (err) {
      console.error(err);
      alert('Upload failed!');
    }
  };

  return (
    <form onSubmit={handleUpload} className="p-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
    </form>
  );
};

export default Upload;
