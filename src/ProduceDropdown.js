import React from 'react';

export default function ProduceDropdown({ setProduce }) {
  return (
    <div>
        Produce 
      <select onChange={e => setProduce(e.target.value)}>
        <option value="corn">Corn</option>
        <option value="tomatoes">Tomatoes</option>
        <option value="eggplant">Eggplant</option>
        <option value="rhubarb">Rhubarb</option>
      </select>
    </div>
  );
}
