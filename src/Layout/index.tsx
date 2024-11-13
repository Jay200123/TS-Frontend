import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-between h-screen w-screen">
      <Navbar />
      <div className="p-3">
        <ToastContainer />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
