import React from "react";
import logo from "./Images/logo.png";

const Header = () => {
  return (
    <>
      <h1>
        <div className='header'>
          <img src={logo} alt='logo' width='70' height='50' />
          <h1>React Keep</h1>
        </div>
      </h1>
    </>
  );
};

export default Header;
