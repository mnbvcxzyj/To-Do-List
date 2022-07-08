import { TextDiv, CursorDiv, CheckTitleDiv } from "./styledComponent";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ToDoListCheck({ todo, onRemove }) {
  const { id, text } = todo;

  return (
    <>
      <CheckTitleDiv>
        <input type={"checkbox"} />
        <TextDiv>{text}</TextDiv>
        <CursorDiv onClick={() => onRemove(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </CursorDiv>
      </CheckTitleDiv>
    </>
  );
}

export default ToDoListCheck;
