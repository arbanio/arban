import Navbar from "@/components/Navbar";
import React from "react";

const Homelayout = ({ children }) => {
  return (
        <main>
          <Navbar />
          {children}
        </main>
  );
};

export default Homelayout;
