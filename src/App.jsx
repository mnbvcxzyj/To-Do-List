import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./style";
import Slogun from "./Slogun";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Slogun />
    </>
  );
}

export default App;
