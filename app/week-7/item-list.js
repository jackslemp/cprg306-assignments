"use client";

export default function ItemList({ items, onRemoveItem }) {
  // Function to handle item removal without mutating the original array
  const handleRemove = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    onRemoveItem(updatedItems);
  };

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li 
          key={item.id} 
          className="flex justify-between items-center bg-gray-100 p-2 rounded text-blue-700"
        >
          <span>{item.quantity}x {item.name} ({item.category})</span>
          <button 
            onClick={() => handleRemove(item.id)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}