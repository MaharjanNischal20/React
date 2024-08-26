import { createContext, useReducer } from "react";

export const toDoItemStore = createContext({
  todoItems: [],
  handleNewItem: () => {},
  handleDeleteItem: () => {},
});

const todoItemReducer = (currTodoItem, action) => {
  let newToDoItems = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newToDoItems = [
      ...currTodoItem,
      {
        todoName: action.payload.newItem,
        todoDate: action.payload.newDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = currTodoItem.filter(
      (item) => item.todoName !== action.payload.todoItemName
    );
  }
  return newToDoItems;
};

const ToDoItemStoreProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const handleNewItem = (newItem, newDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { newItem, newDate },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDeleteItem = (todoItemName) => {
    const deleteItemActtion = {
      type: "DELETE_ITEM",
      payload: { todoItemName },
    };
    dispatchTodoItems(deleteItemActtion);
  };
  return (
    <toDoItemStore.Provider
      value={{
        todoItems,
        handleNewItem,
        handleDeleteItem,
      }}
    >
      {children}
    </toDoItemStore.Provider>
  );
};

export default ToDoItemStoreProvider;
