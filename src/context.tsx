import React, { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

/* Manages the complex flow of states across multiple screens */

export const RestoreProvider: React.FC<any> = ({ children }) => {
  const drawerWidth = 260;
  const [isSidenavOpen, setIsSidenavOpen] = useState<Boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isSidenavOpen,
        setIsSidenavOpen,
        drawerWidth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
