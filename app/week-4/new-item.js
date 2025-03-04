"use client";

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-blue-700">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Quantity Selector</h2>
      <div className="flex items-center justify-center space-x-4">
        <button 
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
  );
}