// Admin UI Routes
import { lazy } from "react";

const Dashboard = lazy(
  () => import("../../pages/admin-ui/dashboard/Dashboard")
);

export { Dashboard };
