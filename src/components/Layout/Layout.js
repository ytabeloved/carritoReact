import { useState, useEffect } from 'react'
import ItemListContainer from '../Container/ItemListContainer'
import ItemDetailContainer from '../ItemContainer/ItemContainer'
import NavBar from '../Navbar/NavBar'
import Cart from '../Cart/Cart'
import Notification from '../Notification/Notification'
import Login from '../Login/login'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { getCategories } from '../../products'
import { NotificationContextProvider } from '../../context/NotificationContext'
import Home from "../Home/Home"; 
import {Alert, Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom'  



export const Layout = () => {

  const [cartProducts, setCartProduct] = useState([])
  const [user, setUser] = useState([])
  

  useEffect(() => {
    setTimeout(() => {
      setUser('Bucky')
    }, 1000)
  }, [])


  return (
    <div className="App">
      <NotificationContextProvider>      
        <BrowserRouter>
            <NavBar categories={getCategories()} cartProducts={cartProducts}/>  
          <Notification />
            <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path='/' component={Home} />
            <Route path='/category/:categoryid'>
                <ItemListContainer />
              </Route>
              <Route path='/item/:itemid'>
                <ItemDetailContainer productsAdded={cartProducts} addProdFunction={setCartProduct}/>
              </Route>
              <Route path='/cart'>
              {console.log({user})}
                   {                   
                    user === 'Bucky'                      
                      ?<Cart productsAdded={cartProducts} addProdFunction={setCartProduct}/>
                      :<Alert variant="danger" >
                      <Alert.Heading>Oh lo siento! no estas logueado</Alert.Heading>
                      <Link to='/login'><Button variant="outline-dark" >Login</Button></Link>
                      </Alert>                                      
                      }                                  
              </Route>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route render={() => <Alert variant="danger" >
                                   <Alert.Heading>Oh lo siento! ya no me da mas el cerebro!</Alert.Heading>
                                   <p>La pagina que buscas aun no existe!!</p>
                                   </Alert>} />
            </Switch>
        </BrowserRouter>
 
      </NotificationContextProvider>
    </div>
  )
}

export default Layout;