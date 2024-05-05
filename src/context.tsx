import React, { createContext, useContext, useState } from "react";
import { IAppContextType, ISelectorData } from "./types";

export const AppContext = createContext<IAppContextType | null>(null);

/* Manages the complex flow of states across multiple screens */

export const ContextProvider: React.FC<any> = ({ children }) => {
  const drawerWidth = 260;
  const [isSidenavOpen, setIsSidenavOpen] = useState<Boolean>(false);
  const [jobRolesFilter, setJobRolesFilter] = useState<ISelectorData[]>([]);
  const [experienceFilter, setExperienceFilter] = useState<ISelectorData>();
  const [locationFilter, setLocationFilter] = useState<ISelectorData[]>([]);
  const [minBaseFilter, setMinBaseFilter] = useState<ISelectorData>();
  const [companyNameFilter, setCompanyNameFilter] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        isSidenavOpen,
        setIsSidenavOpen,
        drawerWidth,
        jobRolesFilter,
        setJobRolesFilter,
        experienceFilter,
        setExperienceFilter,
        locationFilter,
        setLocationFilter,
        minBaseFilter,
        setMinBaseFilter,
        companyNameFilter,
        setCompanyNameFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/**
 * Helper hook to retreive context data.
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within ContextProvider");
  }

  return context;
};
