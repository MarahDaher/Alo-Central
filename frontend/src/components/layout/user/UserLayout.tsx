import { FunctionComponent } from "react";
import { Outlet } from "react-router";
import UHeader from "./UserHeader";

interface UserLayoutProps {}

const UserLayout: FunctionComponent<UserLayoutProps> = () => {
  return (
    <div className="h-screen w-full">
      <div>
        {/* Header */}
        <UHeader />

        {/* Main content */}
        <main className="p-6 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
