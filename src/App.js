import Layout from './components/Layout/Layout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from './context/UserContext'


function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <Layout />
      </UserContextProvider>
    </div>
  );
}

export default App;
