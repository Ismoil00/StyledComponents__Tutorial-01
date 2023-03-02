import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import React from "react";
import { TextWrapper, H1 } from "./components/texts/Texts.style";
import {
  Button,
  FancyButton,
  SubmitButton,
} from "./components/buttons/Buttons.style";
import { Input } from "./components/inputs/Inputs.style";
import { AnimatedLOGO } from "./components/images/Images.style";

function App() {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
      lightblue: "lightblue",
    },
    textProps: {
      underline: "underline",
      none: "none",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TextWrapper bg={"#ebfbff"} cursor={"pointer"}>
        <H1>Hubble</H1>
        <Button variant="outlined">Button</Button>
        <Button variant="">Button</Button>
        {/* Polymorfic-props change the HTML element-type of a styled-component: */}
        <FancyButton as="div">Fancy Button</FancyButton>
        {/* we can specify attributes using Styled-Component! */}
        <SubmitButton>Submit Button</SubmitButton>
        {/* we can pass attributes as props: */}
        <Input itsType="password" />
      </TextWrapper>
      <div style={style}>
        <AnimatedLOGO src={"/logo512.png"} />
      </div>
    </ThemeProvider>
  );
}

export default App;
