import React from 'react';

export default function FruitDropdown({ setFruits }) {
  return (
    <div>
        Off the Trees 
      <select onChange={e => setFruits(e.target.value)}>
        <option value="apples">Apples</option>
        <option value="pears">Pears</option>
        <option value="peaches">Peaches</option>
        <option value="plums">Plums</option>
        <option value="cherries">Cherries</option>
      </select>
    </div>
  );
}
