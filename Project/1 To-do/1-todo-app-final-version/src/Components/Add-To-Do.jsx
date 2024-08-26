import { useContext, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { toDoItemStore } from "../store/todoItemStore";

const Add_to_do = () => {
  const { handleNewItem } = useContext(toDoItemStore);
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleName = (event) => {
    setTodoName(event.target.value);
  };

  const handleDate = (event) => {
    setTodoDate(event.target.value);
  };

  const handleOnClick = () => {
    handleNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter to-do here"
            onChange={handleName}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDate} value={todoDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success item-button"
            onClick={handleOnClick}
          >
            <IoAddCircleSharp />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Add_to_do;
