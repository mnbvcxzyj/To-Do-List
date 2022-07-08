import {
  ListDiv,
  TextDiv,
  CheckDiv,
  CursorDiv,
  CheckTitleDiv,
} from "./styledComponent";
import {
  faPen,
  faTrash,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ToDoInput from "./ToDoInput";

function ToDoListCheck({ todo, onRemove, onToggle }) {
  const { id, text, check } = todo;

  return (
    <>
      <CheckDiv>
        <CheckTitleDiv onClick={() => onToggle(check)}>
          {" "}
          {check ? (
            <FontAwesomeIcon icon={faThumbsUp} />
          ) : (
            <FontAwesomeIcon icon={faThumbsDown} />
          )}
          <TextDiv>{text}</TextDiv>
          <CursorDiv onClick={ToDoInput}>
            <FontAwesomeIcon icon={faPen} />
          </CursorDiv>
          <CursorDiv onClick={() => onRemove(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </CursorDiv>
        </CheckTitleDiv>
      </CheckDiv>
    </>
  );
}

export default ToDoListCheck;
