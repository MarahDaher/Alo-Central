import AHeader from "./AdminHeader";
import ASidebar from "./AdminSidebar";
import { FunctionComponent } from "react";
import { Outlet } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar";

type AdminLayoutProps = object;

const AdminLayout: FunctionComponent<AdminLayoutProps> = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
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
    </SidebarProvider>
  );
};

export default AdminLayout;
