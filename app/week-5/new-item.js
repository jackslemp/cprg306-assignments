"use client";

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category
    };

    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset state variables to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    setQuantity(prevQuantity => 
      prevQuantity < 20 ? prevQuantity + 1 : prevQuantity
    );
  };

  const decrement = () => {
    setQuantity(prevQuantity => 
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4 text-blue-700"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Add New Item</h2>
      
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Item Name
        </label>
        <input 
          type="text" 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Enter item name"
        />
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Quantity</label>
        <div className="flex items-center space-x-4">
          <button 
            type="button"
            onClick={decrement} 
            disabled={quantity === 1}
            className={`
              px-4 py-2 rounded 
              ${quantity === 1 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'}
            `}
          >
            -
          </button>
          
          <span className="text-xl font-semibold">{quantity}</span>
          
          <button 
            type="button"
            onClick={increment} 
            disabled={quantity === 20}
            className={`
              px-4 py-2 rounded 
              ${quantity === 20 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'}
            `}
          >
            +
          </button>
        </div>
      </div>

      {/* Category Selector */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <div>
        <button 
          type="submit" 
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}