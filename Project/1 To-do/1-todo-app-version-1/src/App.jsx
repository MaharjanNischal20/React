import AppName from "./Components/AppName";
import Add_to_do from "./Components/Add-To-Do";
import ToDoItem from "./Components/To_do_Item";
import ToDoItem2 from "./Components/To_do_Item2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <Add_to_do />
      <div className="todoItem-container">
        <ToDoItem />
        <ToDoItem2 />
      </div>
    </center>
  );
}
export default App;
