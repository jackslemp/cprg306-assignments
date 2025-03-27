"use client";
 import Item from "./item";
 import React, { useState } from "react";
 
 export function ItemList({ items, onItemSelect }) {
   const [sortBy, setSortBy] = useState("name");
 
   const handleSortchange = (newSortBy) => {
     setSortBy(newSortBy);
   };
 
   const sortingHat = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
 
   const groupingHat = () => {
     if (sortBy === "grouped") {
       const grouped = items.reduce((acc, item) => {
         const category = item.category;
         if (!acc[category]) {
           acc[category] = [];
         }
         acc[category].push(item);
         return acc;
       }, {});
       const sortedCategories = Object.keys(grouped).sort();
       for (const category in grouped) {
         grouped[category].sort((a, b) => {
           if (a.name < b.name) {
             return -1;
           }
           if (a.name > b.name) {
             return 1;
           }
           return 0;
         });
       }
       return sortedCategories.map((category) => (
         <div key={category}>
           <h2 className="capitalize">{category}</h2>
           {grouped[category].map((item) => (
             <Item key={item.id} {...item} />
           ))}
         </div>
       ));
     } else {
       return sortingHat.map((item) => <Item key={item.id} {...item} />);
     }
   };
   return (
     <div className="flex flex-col">
       <div className="flex justify-items-start p-5">
         <button
           onClick={() => handleSortchange("name")}
           style={{ backgroundColor: sortBy === "name" ? "lightgray" : "white" }}
           className="text-black p-2"
         >
           Sort By Name
         </button>
         <div className="p-2"></div>
         <button
           onClick={() => handleSortchange("category")}
           style={{
             backgroundColor: sortBy === "category" ? "lightgrey" : "white",
           }}
           className="text-black p-2"
         >
           Sort by Category
         </button>
         <div className="p-2"></div>
         <button
           onClick={() => handleSortchange("grouped")}
           style={{
             backgroundColor: sortBy === "category" ? "lightgrey" : "white",
           }}
           className="text-black p-2"
         >
           Group by Category
         </button>
       </div>
       <div>{groupingHat()}</div>
     </div>
   );
 }