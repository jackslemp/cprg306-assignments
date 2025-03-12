"use client";

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort the items based on the current sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-4">
        <button 
          onClick={() => setSortBy("name")}
          className={`
            px-4 py-2 rounded 
            ${sortBy === "name" 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
          `}
        >
          Sort by Name
        </button>
        <button 
          onClick={() => setSortBy("category")}
          className={`
            px-4 py-2 rounded 
            ${sortBy === "category" 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
          `}
        >
          Sort by Category
        </button>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedItems.map((item) => (
          <Item 
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
