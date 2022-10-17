import "./App.css";

function MyButton() {
  return <button className="my-button">My Button</button>;
}

function App() {
  return (
    <div>
      <h1>Hello World to `my-app`</h1>
      <MyButton />
    </div>
  );
}

export default App;
