import { MediaDiv, Main, TodoList } from "./styledComponent";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./style";
import { useState, useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ListSection, ListTitleDiv, CursorDiv } from "./styledComponent";
import Header from "./Header";
import Slogun from "./Slogun";
import Footer from "./Footer";
import ToDoList from "./ToDoList";
import ToDoListCheck from "./ToDoListCheck";
import ToDoEdit from "./ToDoEdit";
import ToDoInput from "./ToDoInput";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "헬스장 가기",
      check: true,
    },
    {
      id: 2,
      text: "일찍 일어나기",
      check: true,
    },
    {
      id: 3,
      text: "빨래하기",
      check: false,
    },
  ]);
  const plusToDo = useRef(4);
  const onInput = useCallback(
    (text) => {
      const todo = {
        id: plusToDo.current,
        text,
        check: false,
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

  const navigate = useNavigate();
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
          <Main>
            <Slogun />
            <ToDoInput />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <ToDoList todos={todos}>
                    <ToDoListCheck />
                  </ToDoList>
                }
              />
            </Routes>
          </Main>
          <Footer></Footer>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}
export default App;
