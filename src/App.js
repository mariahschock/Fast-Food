import { useState } from 'react';
import './App.css';
import BerryDropdown from './BerryDropdown';
import FruitDropdown from './FruitDropdown';
import ProduceDropdown from './ProduceDropdown';

function App() {
  const [berries, setBerries] = useState('strawberries');
  const [fruits, setFruits] = useState('peaches');
  const [produce, setProduce] = useState('tomatoes');


  return (
    <div className="App">
      <header>
        <h1>
        Alchemy U-Pick Farm
        </h1>
      </header>
      <p>Welcome to Alchemy U-Pick! Please decide ahead of time what you would like to pick. Make sure to include your name and any special instructions!</p>
      <BerryDropdown setBerries={ setBerries } /> <br />
      <FruitDropdown setFruits={ setFruits } /> <br />
      <ProduceDropdown setProduce={ setProduce } />
    </div>
  );
}

export default App;
