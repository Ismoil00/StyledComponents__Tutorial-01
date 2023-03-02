import styled from "styled-components";

// Attribute Constructor - it also returns props as a function, so we can use passed props and generate attributes:
export const Input = styled.input.attrs((props) => ({ type: props.itsType }))`
  font-size: 1.2rem;
  color: blue;
  padding: 5px 10px;
  border: 1px solid blue;
  outline: none;
`;