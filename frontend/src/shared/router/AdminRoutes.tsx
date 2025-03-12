import AdminLayout from "../../components/layout/admin/AdminLayout";
import ADashboardPage from "@pages/admin-ui/dashboard/Dashboard";

export const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [{ index: true, element: <ADashboardPage /> }],
};
