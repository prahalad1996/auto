import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        
          <Outlet /> {/* Renders nested pages */}
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;
