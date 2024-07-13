import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = [
    "An active item",
    "A second item",
    "A fourth item",
    "And a fifth one",
  ];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
