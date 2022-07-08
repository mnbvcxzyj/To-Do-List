import React from "react";
import { ListSection, ListDiv } from "./styledComponent";
import ToDoListCheck from "./ToDoListCheck";

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
