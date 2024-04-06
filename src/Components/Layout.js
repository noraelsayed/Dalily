import React from "react";
import Header from "./Header/Header";
import Slide from "./Slide/Slide";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="row1">
        <Slide />
      </div>
      <div className="row2">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
