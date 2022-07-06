import { createGlobalStyle } from "styled-components";

//yarn add styled-reset
import reset from "styled-reset";

export const lightTheme = {
  bgColor: "white",
  fontColor: "#2c2c2c",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

// 전역에 일관성 있는 스타일 적용
export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
