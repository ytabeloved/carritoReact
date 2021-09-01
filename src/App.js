import NavBar from './components/navbar';
import ItemListContainer from './components/Container/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  console.log('Hello world')


  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListContainer saludo="karla"/>

      </header>
    </div>
  );
}

export default App;
