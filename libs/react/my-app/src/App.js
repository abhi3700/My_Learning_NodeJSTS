import './App.css';

let isLoggedIn = false;

function AdminPanel() {
  return <div>Admin Panel</div>;
}

function LoginPanel() {
  return <div>Login Panel</div>;
}

function App() {
  return <div>{isLoggedIn ? <AdminPanel /> : <LoginPanel />}</div>;
}

export default App;
