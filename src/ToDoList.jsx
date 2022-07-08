import React, { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  ListSection,
  ListTitleDiv,
  CursorDiv,
  ListDiv,
} from "./styledComponent";
import ToDoListCheck from "./ToDoListCheck";
import ToDoInput from "./ToDoInput";
const ToDoList = ({ todos }) => {
  return (
    <>
      <ListSection>
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
