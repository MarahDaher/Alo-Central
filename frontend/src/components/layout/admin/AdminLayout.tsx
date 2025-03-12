import { FunctionComponent } from "react";
import { Outlet } from "react-router";
import AHeader from "./AdminHeader";
import ASidebar from "./AdminSidebar";

interface AdminLayoutProps {}

const AdminLayout: FunctionComponent<AdminLayoutProps> = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <ASidebar />

      <div className="flex flex-col flex-1">
        {/* Header */}
        <AHeader />

        {/* Main content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
