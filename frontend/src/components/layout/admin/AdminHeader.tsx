import { FunctionComponent } from "react";
import { useLanguage } from "../../../shared/contexts/LanguageContext";

interface AHeaderProps {}

const AHeader: FunctionComponent<AHeaderProps> = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button onClick={toggleLanguage} className="p-2 border rounded">
        {language === "en" ? "🇸🇦 Arabic" : "🇺🇸 English"}
      </button>
    </header>
  );
};

export default AHeader;
