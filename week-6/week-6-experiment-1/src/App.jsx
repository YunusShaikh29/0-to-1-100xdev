/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import Header from "./components/Header";
import Todo from "./components/Todo";
import CardWrapper from "./components/CardWrapper";

function App() {
  // const time = Date.now()
  const [todo, setTodo] = useState([]);

  // useEffect(() => {
  //   setInterval(() => {
  //     fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
  //       const json = await res.json();
  //       setTodo(json.todos);
  //     });
  //   }, 15000);
  // }, []);

  return (
    <>
      <CardWrapper>Hii There</CardWrapper>
    <CardWrapper>Hello There</CardWrapper>

      {/* <button>Update Todos</button> */}
      {/* {todo.map((todo) => (
        <Todo title={todo.title} description={todo.description} key={todo} />
      ))} */}
    </>
  );
}

export default App;
