import styled from "styled-components";

const NavStyles = styled.div`
  background-color: #fbebce;
  color: #003400;
  padding: 1rem;

  nav {
    display: flex;
    justify-content: space-around;

    .main-nav-links {
      width: 33%;
      display: flex;
      justify-content: space-around;
    }
  }

  ul {
    max-width: 20rem;
    margin: 0;
    display: flex;
    list-style-type: none;
  }
`;

export default NavStyles;
