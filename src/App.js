//import logo from './logo.svg';
import './App.css';
import Forme from "./Components/forme"; // Pretpostavljajući da je UnosForme u istom direktoriju ili prilagodite putanju
import Zadatak from "./Components/zadatak";
const App = () => {
  return (
    <div>
      <h1>Dobrodošli!</h1>
      {/*<Forme />*/}
      <Zadatak />
    </div>
  );
};

export default App;