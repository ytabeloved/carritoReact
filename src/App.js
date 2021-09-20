import NavBar from './components/navbar';
import ItemListContainer from './components/Container/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
      <ItemListContainer saludo="tu nombre"/> {/*despues veremos como te pide el nombre*/}

      </div>
    </div>
  );
}

export default App;
