// context/DocumentContext.js

import React, { createContext, useContext, useState } from 'react';

const DocumentContext = createContext();

export const useDocuments = () => {
  return useContext(DocumentContext);
};

export const DocumentProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);

  const addDocument = (newDocument) => {
    setDocuments((prevDocs) => [...prevDocs, newDocument]);
  };

  return (
    <DocumentContext.Provider value={{ documents, addDocument }}>
      {children}
    </DocumentContext.Provider>
  );
};
