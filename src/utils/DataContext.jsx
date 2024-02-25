// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [useMockData, setUseMockData] = useState(false);

  const toggleData = () => {
    setUseMockData(prev => !prev);
  };

  return (
    <DataContext.Provider value={{ useMockData, toggleData }}>
      {children}
    </DataContext.Provider>
  );
};
