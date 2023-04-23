import styled from "styled-components";

const NavStyles = styled.div`
  background-color: #fbebce;
  color: #003400;
  padding: 1rem;
  box-shadow: 0px 5px 5px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .main-nav-links {
      min-width: 450px;
      display: flex;
      justify-content: space-between;
      justify-self: center;
      @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        display: none;
      }
    }
  }

  ul {
    max-width: 20rem;
    margin: 0;
    display: flex;
    list-style-type: none;
  }

  .fa-bars {
    display: none;
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      display: block;
    }
  }

  #auth-links,
  button {
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }
`;

export default NavStyles;
