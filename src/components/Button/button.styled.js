import styled from "styled-components";

const BtnStyles = styled.button`
  font-family: "Press Start 2P", cursive;
  font-size: x-small;
  font-weight: lighter;
  background-color: #e0c1ae;
  border-style: groove;
  color: green;
  margin: 0 5px;
  border-radius: 5px;
  border-width: 2px;
  padding: 0.5rem;
  box-shadow: 5px 5px #000;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }

  .button {
    color: ${(props) => (props.reverse ? "white" : "")};
  }
`;

export default BtnStyles;
