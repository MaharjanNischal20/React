import ToDoItem from "./To_do_Item";

const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="container">
      {todoItems.map((item) => (
        <ToDoItem
          todoName={item.todoName}
          todoDate={item.todoDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default ToDoItems;
