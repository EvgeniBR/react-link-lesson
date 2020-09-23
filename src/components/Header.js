import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div style={{padding:`1rem` , margin:`1rem`}} >
      <Link style={{padding:`1rem` , margin:`1rem`}} to="/products" >
        {" "}
        Products
      </Link>
      
        <Link style={{padding:`1rem` , margin:`1rem`}} to="/">
          {" "}
          HomePage
        </Link>
     
    </div>
  );
};

export default Header;
