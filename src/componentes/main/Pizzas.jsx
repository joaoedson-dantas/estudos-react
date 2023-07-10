import React from 'react';
import { pizzaJson } from '../../pizzas/pizzas';

const Pizzas = () => {
  return (
    <main>
      <ul>
        {pizzaJson.map((pizza) => (
          <li key={pizza.id}>
            <div>
              <h2>{pizza.name}</h2>
              <img src={pizza.img} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Pizzas;
