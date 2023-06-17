import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false)
 
  function handleClick() {
    setCart((cart) => !cart)
  }

  return (
    <li className={cart ? 'in-cart' : ''}>
      <span>{name}</span> 
      <span className="category">{category}</span>
      <button onClick={handleClick} className={cart ? 'Remove' : 'Add'}>Add to Cart</button>
    </li>
  );
}

export default Item;
