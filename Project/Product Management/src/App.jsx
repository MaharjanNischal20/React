import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/create" element={<CreateProduct />}></Route>
        <Route path="/edit/:id" element={<EditProduct />}></Route>
        <Route path="/single/:id" element={<SingleProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
