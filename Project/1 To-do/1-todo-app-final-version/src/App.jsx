import AppName from "./Components/AppName";
import Add_to_do from "./Components/Add-To-Do";
import ToDoItems from "./Components/To_do_Items";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import ToDoItemStoreProvider from "./store/todoItemStore";

function App() {
  return (
    <center className="todo-container">
      <ToDoItemStoreProvider>
        <AppName />
        <Add_to_do />
        <WelcomeMessage />
        <div className="todoItem-container">
          <ToDoItems />
        </div>
      </ToDoItemStoreProvider>
    </center>
  );
}
export default App;
