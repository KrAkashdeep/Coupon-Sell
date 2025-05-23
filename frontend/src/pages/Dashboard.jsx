import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Outlet /> 
      </div>
    </div>
  );
}

export default Dashboard;
