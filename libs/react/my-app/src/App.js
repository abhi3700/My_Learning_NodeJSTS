import './App.css';

const user = {
  name: 'John Doe',
  age: 42,
  image: 'https://randomuser.me/api/portraits/lego/2.jpg',
  imageSize: 90,
};

function App() {
  return (
    <div>
      <h2>
        {user.name}, {user.age}
      </h2>
      <img
        className="avatar"
        src={user.image}
        alt={'Photo of' + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </div>
  );
}

export default App;
