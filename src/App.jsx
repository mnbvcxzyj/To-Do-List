import { MediaDiv, Main, TodoList } from "./styledComponent";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./style";
import { useState, useCallback, useRef } from "react";
import Header from "./Header";
import Slogun from "./Slogun";
import Footer from "./Footer";
import ToDoList from "./ToDoList";
import ToDoListCheck from "./ToDoListCheck";
import ToDoInput from "./ToDoInput";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "헬스장 가기",
    },
    {
      id: 2,
      text: "일찍 일어나기",
    },
    {
      id: 3,
      text: "빨래하기",
    },
  ]);

  const plusToDo = useRef(4);
  const onInput = useCallback(
    (text) => {
      const todo = {
        id: plusToDo.current,
        text,
      };
      setTodos(todos.concat(todo));
      plusToDo.current++;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => setTodos(todos.filter((todo) => todo.id !== id)),
    [todos]
  );

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
          <Main>
            <Slogun />
            <ToDoInput onInput={onInput} />
            <ToDoList todos={todos} onRemove={onRemove}>
              <ToDoListCheck todo={todos} onRemove={onRemove} />
            </ToDoList>
          </Main>
          <Footer></Footer>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}
export default App;
