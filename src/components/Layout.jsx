import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../pages/WhatsAppButton";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;
