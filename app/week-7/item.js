import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 border rounded-lg shadow-md bg-white">
      <p className="text-lg font-semibold text-blue-700">{name}</p>
      <p className="text-sm text-gray-600">Quantity: {quantity}</p>
      <p className="text-sm text-gray-500">Category: {category}</p>
    </li>
  );
};

export default Item;
