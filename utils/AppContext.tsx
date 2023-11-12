import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tableNumber, setTableNumber] = useState('3');
  const [currentRound, setCurrentRound] = useState(1);
  const [timer, setTimer] = useState(2 * 60 * 60);

  const contextValue = {
    tableNumber,
    setTableNumber,
    currentRound,
    setCurrentRound,
    timer,
    setTimer,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
