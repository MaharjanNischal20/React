import React from "react";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <Link to={`/single/${product.id}`}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={product.productImage} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.productName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.productDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
