import { useState } from 'react';
import './App.css';
import BerryDropdown from './BerryDropdown';
import FruitDropdown from './FruitDropdown';
import ProduceDropdown from './ProduceDropdown';
import Pick from './Pick';
import Name from './Name';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import backgroundImage from './Background.jpeg';

function App() {
  const [berries, setBerries] = useState('strawberries');
  const [fruits, setFruits] = useState('apples');
  const [produce, setProduce] = useState('corn');
  const [name, setName] = useState('');
  const [commentsForm, setCommentsForm] = useState('');
  const [comments, setComments] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();

    setComments([...comments, commentsForm]);

    setCommentsForm('');
  }

  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="App">
        <header>
          <h1>
        Alchemy U-Pick Farm
          </h1>
        </header>
        <p>Welcome to Alchemy U-Pick! Please decide ahead of time what you would like to pick. Make sure to include your name and any additional comments!</p>
        <section className="user-info">
          <Name setName={ setName } name={ name }/>
          <CommentsForm handleSubmit={handleSubmit} setCommentsForm={ setCommentsForm } commentsForm={ commentsForm } />
        </section>
        <section className="dropdowns">
          <BerryDropdown setBerries={ setBerries } /> <br />
          <FruitDropdown setFruits={ setFruits } /> <br />
          <ProduceDropdown setProduce={ setProduce } />
        </section>
        <section className="pictures">
          <Pick 
            berries={berries} 
            fruits={fruits}
            produce={produce} />
        </section>
        <section className="displayInfo">
          <h2>Pickers Name: {name}</h2>
          <h3>
            <CommentsList comments={ comments } />
          </h3>
        </section>
      </div>
    </main>
  );
}

export default App;
