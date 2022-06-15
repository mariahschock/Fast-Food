import React from 'react';

export default function Pick({ berries, fruits, produce }) {
  return (
    <section>
      <img src={`${berries}.png`} />
      <img src={`${fruits}.png`} />
      <img src={`${produce}.png`} />
    </section>
  );
}
