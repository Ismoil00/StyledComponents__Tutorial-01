import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "outlined" ? "white" : "green"};
  color: ${({ variant }) => (variant === "outlined" ? "green" : "white")};
  border: 1px solid
    ${({ variant }) => (variant === "outlined" ? "green" : "transparent")};
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.variant !== "outlined" ? "white" : "green"};
    color: ${({ variant }) => (variant !== "outlined" ? "green" : "white")};
    border: 1px solid
      ${({ variant }) => (variant !== "outlined" ? "green" : "transparent")};
  }
`;

// Extending other styled components:
export const FancyButton = styled(Button)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
  transition: all 1s;

  &:hover {
    background-image: linear-gradient(to left, #f6d365 0%, #fda085 100%);
    color: white;
    border: none;
  }
`;

// Attribute Constructor - we can specify attributes using styled-component feature ".attrs({})";
export const SubmitButton = styled(Button).attrs({ type: "submit" })`
  box-shadow: 0 9px #999;

  &:hover {
    transform: translateY(4px);
    box-shadow: 0 5px #666;
    background-color: ${(props) =>
      props.variant !== "outlined" ? "white" : "green"};
  }
`;

export const ModeButton = styled(Button)`
  background-color: ${({ theme }) => (theme.mode ? "black" : "white")};
  color: ${({ theme }) => (theme.mode ? "white" : "black")};
  border-color: ${({ theme }) => (theme.mode ? "white" : "black")};
  transition: all 0.1s;

  &:hover {
    background-color: ${({ theme }) =>
      theme.mode ? "black" : "white"};
    color: ${({ theme }) => (theme.mode ? "white" : "black")};
    border-color: ${({ theme }) => (theme.mode ? "white" : "black")};
  }
`;
