// import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import CreateTodo from "./components/CreateTodo";
// import Todos from "./components/Todos";

function App() {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const fetchData = async() => {
  //     const response = await fetch("http:localhost:5000/todos")
  //     // const data = await response.json()
  //     setTodos(response.json())
  //   }
  //   fetchData()
  // }, [])

  // fetch("http://localhost:5000/todo").then(async function (res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <>
      <h1>Todo Appliccation</h1>
      <CreateTodo />
      {/* <Todos todos={todos} /> */}
    </>
  );
}

export default App;
