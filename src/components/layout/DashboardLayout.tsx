import React, { type ReactNode } from "react";
import DashboardNav from "../components/DashboardNav";
interface DashboardLayoutProps {
  children: ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex">
      <DashboardNav />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
