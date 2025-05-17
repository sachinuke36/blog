"use client"
import React, { createContext, useContext, useState } from "react";

const Context = createContext<any>(null);
export const useAppContext = ()=> useContext(Context);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const backendUrl = 'http://localhost:8000';
    const [user, setUser] = useState<any>(null);

  return (
	<Context.Provider value={{backendUrl, user, setUser}}>
	  {children}
	</Context.Provider>
  );
};

export default AppContextProvider;