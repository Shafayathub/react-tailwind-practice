import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-3xl text-blue-400 font-bold mt-5">Hello world!</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
