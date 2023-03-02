import styled from "styled-components";

export const BODY = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => (theme.mode ? "black" : "white")};
`