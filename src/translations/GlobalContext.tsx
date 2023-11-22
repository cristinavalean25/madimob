import React, { createContext, useContext, ReactNode, useState } from "react";
import enMessages from "./en.json";
import roMessages from "./ro.json";

interface GlobalContextType {
  locale: string;
  setLocale: (newLocale: string) => void;
  messages: Record<string, any>;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<string>("en");

  const setLocaleContext = (newLocale: string) => {
    setLocaleState(newLocale);
  };

  const messages: Record<string, any> = {
    en: enMessages,
    ro: roMessages,
  };

  return (
    <GlobalContext.Provider
      value={{ locale, setLocale: setLocaleContext, messages }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export default GlobalProvider;
