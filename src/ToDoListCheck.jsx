import {
  ListDiv,
  TextDiv,
  CheckDiv,
  CursorDiv,
  CheckTitleDiv,
} from "./styledComponent";
import {
  faPen,
  faSquareCheck,
  faSquare,
  faTrash,
  faFaceSmile,
  faFaceAngry,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ToDoListCheck({ todo }) {
  const { id, text, check } = todo;
  return (
    <>
      <CheckDiv>
        <CheckTitleDiv>
          {" "}
          {check ? (
            <FontAwesomeIcon icon={faThumbsUp} />
          ) : (
            <FontAwesomeIcon icon={faThumbsDown} />
          )}
          <TextDiv>{text}</TextDiv>
          <CursorDiv>
            <FontAwesomeIcon icon={faPen} />
          </CursorDiv>
          <CursorDiv>
            <FontAwesomeIcon icon={faTrash} />
          </CursorDiv>
        </CheckTitleDiv>
      </CheckDiv>
    </>
  );
}

export default ToDoListCheck;
