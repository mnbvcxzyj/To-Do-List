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
import React, { useEffect } from "react";
import ToDoInput from "./ToDoInput";

function ToDoListCheck({
  todo,
  onRemove,
  onToggle,
  onInputToggle,
  selectedTodo,
  setValue,
  onChangeSelectedTodo,
}) {
  const { id, text, check } = todo;

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

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
          <CursorDiv
            onClick={() => {
              onChangeSelectedTodo(todo);
              onInputToggle();
            }}
          >
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
