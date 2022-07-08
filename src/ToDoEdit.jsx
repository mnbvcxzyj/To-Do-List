import React from "react";
import { useState, useCallback, useEffect } from "react";

function ToDoEdit({
  selectedTodo,
  onUpdate,
  onInputToggle,
  onChangeSelectedToggle,
}) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onUpdate(selectedTodo.id, value);
      setValue(""); //value 초기화
      e.preventDefault();
    },
    [onUpdate, value]
  );

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div className="background">
      <form onSubmit={onSubmit}>
        수정
        <input
          onChange={onChange}
          value={value}
          placeholder="할 일을 수정해보세요!"
        />
        <button type="plus">Edit</button>
      </form>
    </div>
  );
}

export default ToDoEdit;
