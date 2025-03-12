import { FunctionComponent } from "react";
import { useLanguage } from "../../../shared/contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import IconButton from "../../IconButton";

interface UHeaderProps {}

const UHeader: FunctionComponent<UHeaderProps> = () => {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{t("welcome")}</h1>
      <IconButton
        label={language === "en" ? "🇸🇦" : "🇺🇸"}
        onClick={toggleLanguage}
        className="p-2 border rounded"
      />
    </header>
  );
};

export default UHeader;
