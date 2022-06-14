import React from 'react';

export default function BerryDropdown({ setBerries }) {
  return (
    <div>
        Berries
      <select onChange={e => setBerries(e.target.value)}>
        <option value="strawberries">Strawberries</option>
        <option value="raspberries">Raspberries</option>
        <option value="blackberries">Blackberries</option>
        <option value="blueberries">Blueberries</option>
      </select>
    </div>
  );
}
