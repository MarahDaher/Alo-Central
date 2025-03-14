import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Define context
const LanguageContext = createContext({
  language: "ar",
  isRTL: false,
  isLTR: true,
  toggleLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("appLanguage") || i18n.language || "ar"
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    localStorage.setItem("appLanguage", newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const isRTL = language === "ar";
  const isLTR = language === "en";

  return (
    <LanguageContext.Provider
      value={{ language, isRTL, isLTR, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);
