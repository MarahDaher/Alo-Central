import { FunctionComponent } from "react";
import { NavLink } from "react-router";
import { useLanguage } from "@/shared/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { useSidebarConfig } from "@/shared/config/AdminSidebar";
import { LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";

type ASidebarProps = object;

const ASidebar: FunctionComponent<ASidebarProps> = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const sidebarItems = useSidebarConfig();

  return (
    <aside
      className={cn(
        "h-screen w-64 bg-gray-900 text-white p-4 flex flex-col",
        isRTL ? "rtl text-right" : "ltr text-left"
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className="text-lg font-semibold">Admin Panel</h1>
      </div>

      <nav className="flex-1 overflow-y-auto space-y-2 py-4">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-gray-700">
        <button
          onClick={() => console.log("Logout clicked")} // Replace with actual logout function
          className="flex items-center gap-3 w-full p-3 rounded-lg bg-orange-400 hover:bg-orange-500 transition"
        >
          <LogOut className="size-5" />
          <span>{t("logout")}</span>
        </button>
      </div>
    </aside>
  );
};

export default ASidebar;
