import { FunctionComponent } from "react";
import { Outlet } from "react-router";
import UHeader from "./UserHeader";

interface UserLayoutProps {}

const UserLayout: FunctionComponent<UserLayoutProps> = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1">
        {/* Header */}
        <UHeader />

        {/* Main content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
