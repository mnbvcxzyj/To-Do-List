import React from "react";

import {
  HeaderDiv,
  TitleLogoDiv,
  TitleBig,
  TitleSmall,
  SubHeaderDiv,
  CursorDiv,
} from "./styledComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  return (
    <HeaderDiv>
      <CursorDiv>
        <TitleLogoDiv onClick={goHome}>
          <TitleBig>To-Do List</TitleBig>
          <TitleSmall>오늘 할 일</TitleSmall>
        </TitleLogoDiv>
      </CursorDiv>
      <SubHeaderDiv>
        {darkMode ? (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
        ) : (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
        )}
      </SubHeaderDiv>
    </HeaderDiv>
  );
}

export default Header;
