import { useContext } from "react";
import { toDoItemStore } from "../store/todoItemStore";

const WelcomeMessage = () => {
  const { todoItems } = useContext(toDoItemStore);
  return todoItems.length === 0 && <p>Enjoy your day!!</p>;
};

export default WelcomeMessage;
