import { ThemeProvider } from "styled-components";
import Texts from "./Texts";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  
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
        <Texts />
    </ThemeProvider>
  );
}

export default App;
