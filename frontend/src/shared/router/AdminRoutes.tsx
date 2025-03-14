import ADashboardPage from "@/pages/admin-ui/dashboard/Dashboard";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import AUsersPage from "@/pages/admin-ui/users/User";
import { Home, Users } from "lucide-react";

export const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <ADashboardPage />,
      label: "sidebar.dashboard",
      icon: <Home className="size-4" />,
    },
    {
      path: "users",
      label: "sidebar.users",
      element: <AUsersPage />,
      icon: <Users className="size-4" />,
    },
  ],
};
