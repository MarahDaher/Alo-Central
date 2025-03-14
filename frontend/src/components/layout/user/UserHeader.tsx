import { FunctionComponent } from "react";
import { useLanguage } from "../../../shared/contexts/LanguageContext";
import { useTranslation } from "react-i18next";

import { Input } from "../../ui/input";
import { Search } from "lucide-react";
import img from "../../../assets/react.svg";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/shared/providers/theme-provider";
import IconButton from "@/components/IconButton";

interface UHeaderProps {}

const UHeader: FunctionComponent<UHeaderProps> = () => {
  const { isRTL, language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <>
      <header className="bg-white shadow p-4 flex justify-between items-center w-full">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div
            className={`flex items-center ${
              isRTL ? "order-last" : "order-first"
            }`}
          >
            <img
              src={isRTL ? img : img}
              alt="Logo"
              width={120}
              height={40}
              className="h-8 w-auto px-2"
            />
          </div>

          {/* Country Selector */}
          <div className="md:flex items-center gap-2">
            <IconButton
              label={language === "en" ? "🇸🇦" : "🇺🇸"}
              onClick={toggleLanguage}
              className="p-2 border rounded"
            />
          </div>

          {/* Search Bar */}
          <div
            className={`flex-1 max-w-xl ${
              isRTL ? "order-2 mx-4" : "order-3 mx-4"
            }`}
          >
            <div className="relative">
              <Input
                type="search"
                placeholder={t("search")}
                className={`w-full ${isRTL ? "pr-10" : "pl-10"}`}
              />
              <Search
                className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground ${
                  isRTL ? "right-3" : "left-3"
                }`}
              />
            </div>
          </div>
        </div>
      </header>
    </>
    // <header className="bg-white shadow p-4 flex justify-between items-center">
    //   <h1 className="text-xl font-bold">{t("welcome")}</h1>
    //   <IconButton
    //     label={language === "en" ? "🇸🇦" : "🇺🇸"}
    //     onClick={toggleLanguage}
    //     className="p-2 border rounded"
    //   />
    // </header>
  );
};

export default UHeader;
