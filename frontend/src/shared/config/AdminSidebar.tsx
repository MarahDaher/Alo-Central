import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { AdminRoutes } from "@/shared/router/AdminRoutes";

export const useSidebarConfig = () => {
  const { t } = useTranslation();

  const sidebarItems = useMemo(() => {
    return AdminRoutes.children.map((item) => ({
      path: item.index ? "/admin" : `/admin/${item.path}`,
      label: t(item.label),
      icon: item.icon,
    }));
  }, [t]);

  return sidebarItems;
};
