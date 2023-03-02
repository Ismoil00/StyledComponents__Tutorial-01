import styled, {keyframes} from "styled-components";

// Animation Keyframes:
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const AnimatedLOGO = styled.img`
  height: 40vmin;
  margin: 0 auto;
  pointer-events: none;
  animation: ${rotate} infinite 10s linear;
`