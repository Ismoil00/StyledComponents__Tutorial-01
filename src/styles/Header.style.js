import styled from "styled-components";

// Props => Destructuring Props;
// Nesting;

export const StyledHeader = styled.header`
  background-color: ${(props) => props.bg};
  cursor: ${({ cursor }) => cursor};
  padding: 40px 0;

  h1 {
    color: rgb(50, 50, 50);
    font-family: sans-serif;
  }
`;
