import { useContext } from "react";
import ToDoItem from "./To_do_Item";
import { toDoItemStore } from "../store/todoItemStore";

const ToDoItems = () => {
  const { todoItems, handleDeleteItem } = useContext(toDoItemStore);
  return (
    <div className="container">
      {todoItems.map((item) => (
        <ToDoItem
          todoName={item.todoName}
          todoDate={item.todoDate}
          onDeleteClick={handleDeleteItem}
        />
      ))}
    </div>
  );
};
export default ToDoItems;
