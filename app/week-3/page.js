import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;