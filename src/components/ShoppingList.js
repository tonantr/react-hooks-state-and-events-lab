import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('All')

  function handleOnChange(event) {
    setSelectedCategory(event.target.value)
  }


  const itemsDisplay = items.filter((item) => {
    if (selectedCategory === 'All') {
      return true
    } else {
      return item.category === selectedCategory
    }
  })

  const list = itemsDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleOnChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
        {list}
      </ul>
    </div>
  );
}

export default ShoppingList;
