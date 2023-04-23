import React from "react";
import Styles from "./button.styled";
import { Link } from "gatsby";

const Button = ({ link, title, reverse }) => {
  return (
    <Styles reverse={reverse}>
      <Link to={link}>
        <buton className='button' reverse={reverse}>
          {title}
        </buton>
      </Link>
    </Styles>
  );
};

export default Button;
