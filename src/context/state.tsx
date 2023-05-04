import React, { useContext, useCallback, useState, useEffect, createContext } from 'react';

interface StateContextInterface {
  username: string;
  setUsername: (result: any) => void;
}

interface StateProviderProps {
  children: React.ReactNode;
}

export const StateContext = createContext<StateContextInterface | null>(null);

export const StateProvider = ({ children }: StateProviderProps) => {
  // Setting Username directly because this has no credential page

  const [username, setUName] = useState<string>('jakus');

  const setUsername = (name: string) => {
    setUName(name);
  };

  return <StateContext.Provider value={{ username, setUsername }}>{children}</StateContext.Provider>;
};
