import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

export default function Homepage() {
  const [products, setProduct] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get(
      "https://66e287cb494df9a478e2069c.mockapi.io/products"
    );
    if (response.status === 200) {
      setProduct(response.data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex space-x-5 mt-5 ml-5 flex-wrap">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
}
