import UserLayout from "../../components/layout/user/UserLayout";
import UDashboardPage from "../../pages/user-ui/dashboard/Dashboard";

export const UserRoutes = {
  path: "/",
  element: <UserLayout />,
  children: [{ index: true, element: <UDashboardPage /> }],
};
