import AppName from "./Components/AppName";
import Add_to_do from "./Components/Add-To-Do";
import ToDoItems from "./Components/To_do_Items";
import WelcomeMessage from "./Components/WelcomeMessage";

import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (newItem, newDate) => {
    console.log(`new Item:${newItem},new date:${newDate}`);
    const newToDoItems = [
      ...todoItems,
      {
        todoName: newItem,
        todoDate: newDate,
      },
    ];
    setTodoItems(newToDoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newToDoItems = todoItems.filter(
      (item) => item.todoName !== todoItemName
    );
    setTodoItems(newToDoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <Add_to_do onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <div className="todoItem-container">
        <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </center>
  );
}
export default App;
