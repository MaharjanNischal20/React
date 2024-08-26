import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { toDoItemStore } from "../store/todoItemStore";

const ToDoItem = ({ todoName, todoDate, onDeleteClick }) => {
  const {} = useContext(toDoItemStore);
  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger item-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ToDoItem;
