import { createBrowserRouter } from "react-router";
import { AdminRoutes } from "./AdminRoutes";
import { UserRoutes } from "./UserRoutes";
import NotFoundPage from "../../pages/errors/NotFound";
//Error page
export const router = createBrowserRouter([
  AdminRoutes,
  UserRoutes,
  { path: "*", element: <NotFoundPage /> },
]);
