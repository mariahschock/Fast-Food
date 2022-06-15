import React from 'react';

export default function Name({ setName }) {
  return (
    <section>
        Your name?    
      <input onChange={e => setName(e.target.value)} />
    </section>
  );
}
