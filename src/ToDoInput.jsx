import React from "react";
import { ListSection } from "./styledComponent";
import { useState, useCallback } from "react";

function ToDoInput({ onInput }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInput(value);
      setValue(""); //value 초기화
      //기본이벤트(새로고침) 방지
      e.preventDefault();
    },
    [onInput, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <ListSection>
        <input
          id="input"
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력해보세요!"
        />
        <button type="plus">+</button>
      </ListSection>
    </form>
  );
}

export default ToDoInput;
