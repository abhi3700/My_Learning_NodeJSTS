import './App.css';

const products = [
  { name: 'Cabbage', isVeg: true, id: 1 },
  { name: 'Mutton', isVeg: false, id: 2 },
  { name: 'Carrot', isVeg: true, id: 3 },
];

function App() {
  const listProducts = products.map(product => {
    return (
      <li key={product.id} style={{ color: product.isVeg ? 'green' : 'red' }}>
        {product.name}
      </li>
    );
  });

  return <ul>{listProducts}</ul>;
}

export default App;
