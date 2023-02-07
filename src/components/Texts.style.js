import styled from "styled-components";

export const TextWrapper = styled.header`
  // Passing as Props;
  background-color: ${(props) => props.bg};
  // Destructuring Props;
  cursor: ${({ cursor }) => cursor};
  padding: 40px 0;
`;

export const H1 = styled.h1`
  padding-left: 20px;
  color: rgb(50, 50, 50);
  font-family: sans-serif;
  font-size: 2rem;
  // Theme Props;
  text-decoration: ${({ theme }) => theme.textProps.none};
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
`

