import React from "react";
import NavStyles from "./navigation.styled";
import Button from "../Button/button";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <NavStyles>
      <nav>
        <div className='nav-logo'>Homebrews.Games</div>
        <ul className='main-nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            Games <i className='fa-solid fa-caret-down'></i>
          </li>
          <li>
            Submit <i className='fa-solid fa-caret-down'></i>
          </li>
          <li>About</li>
        </ul>
        <ul className='auth-links'>
          <li>
            <Button id='auth-btn' title='Sign in' />
            <i className='fa-solid fa-bars'></i>
          </li>
        </ul>
      </nav>
    </NavStyles>
  );
};

export default Navigation;
