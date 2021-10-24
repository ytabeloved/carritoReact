import { useState, useEffect, useContext } from 'react'
import ItemListContainer from '../Container/ItemListContainer'
import ItemDetailContainer from '../ItemContainer/ItemContainer'
import NavBar from '../Navbar/NavBar'
import Cart from '../Cart/Cart'
import Notification from '../Notification/Notification'
import Login from '../Login/login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { NotificationContextProvider } from '../../context/NotificationContext'
import Home from "../Home/Home"; 
import {Alert, Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom'  
import { CartContextProvider } from '../../context/CartContext'
import UserContext from '../../context/UserContext'


export const Layout = () => {
  const { user} = useContext(UserContext)
  const [cartProducts, setCartProduct] = useState([])

  return (
    <div className="App">
      <NotificationContextProvider>  
      <CartContextProvider>    
        <BrowserRouter>
            <NavBar/>  
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
                    user !== undefined                      
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
        </CartContextProvider>
      </NotificationContextProvider>
    </div>
  )
}

export default Layout;