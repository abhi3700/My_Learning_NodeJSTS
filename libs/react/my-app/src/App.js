import './App.css';
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0); // start count from '0'

  function handleClick() {
    // alert('button clicked');
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

function App() {
  return (
    <div>
      <h2>Counters that update separately</h2>
      <MyButton />
      <MyButton />
    </div>
  );
}

export default App;
