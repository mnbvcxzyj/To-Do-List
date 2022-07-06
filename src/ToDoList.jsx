import React, { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowsRotate,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  ListSection,
  ListTitleDiv,
  CursorDiv,
  ListDiv,
} from "./styledComponent";
import ToDoListCheck from "./ToDoListCheck";

const ToDoList = ({ todos }) => {
  return (
    <>
      <ListSection>
        <ListTitleDiv>
          <CursorDiv>
            <FontAwesomeIcon icon={faArrowsRotate} />
          </CursorDiv>
          <CursorDiv>
            <FontAwesomeIcon icon={faPlus} />
          </CursorDiv>
        </ListTitleDiv>
        <ListDiv>
          {todos.map((todo) => (
            <ToDoListCheck todo={todo} key={todo.id} />
          ))}
        </ListDiv>
      </ListSection>
    </>
  );
};

export default ToDoList;
