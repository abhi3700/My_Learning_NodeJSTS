import './App.css';
import { useState } from 'react';

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

function App() {
  const [count, setCount] = useState(0); // start count from '0'

  function handleClick() {
    // alert('button clicked');
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Counters that update together</h2>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
