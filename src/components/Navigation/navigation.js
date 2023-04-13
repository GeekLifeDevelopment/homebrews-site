import React from "react";
import NavStyles from "./navigation.styled";

const Navigation = () => {
  return (
    <NavStyles>
      <nav>
        <div className='nav-logo'>Here is my logo</div>
        <ul className='main-nav-links'>
          <li>Home</li>
          <li>News</li>
          <li>Games</li>
          <li>Submit</li>
        </ul>
        <ul className='auth-links'>
          <li>
            <a href=''>Sign In</a>
            <span> / </span>
            <a href=''>Log Out</a>
          </li>
        </ul>
        <ul>
          <i class='fa-sharp fa-solid fa-gamepad'></i>
        </ul>
      </nav>
    </NavStyles>
  );
};

export default Navigation;
