import { useState, useEffect, useContext } from 'react'
import { Navbar, Nav, Container,NavDropdown, Button } from 'react-bootstrap';
import CartWidget from '../Widget/CartWidget';
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css'
import UserContext from '../../context/UserContext'

const NavBar=({ categories, cartProducts })=>{
    const [productQuantity, setProductQuantity] = useState(0)
    const {user, logout} = useContext(UserContext)

  useEffect(() => {
    if(cartProducts.length === 0) {
      setProductQuantity(0)
    } else {
      cartProducts.forEach(prod => {
        setProductQuantity(productQuantity + prod.quantity)
    })
    }
  }, [cartProducts]) 

return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><Link className='linkNavbar' to="/home">Cosmic Connections</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown title="Cristales y mas" id="collasible-nav-dropdown">
            {categories.map(category => <NavDropdown.Item ><NavLink key={category.id} to={`/category/${category.id}`} className='Option' activeClassName="NavLink">{category.description}</NavLink></NavDropdown.Item>)}
        </NavDropdown>
        <Nav.Link><Link className='linkNavbar' to="/Otros">Otros</Link></Nav.Link>
        <Nav.Link><Link className='linkNavbar' to="/Blog">Blog</Link></Nav.Link>       
        </Nav>
        <Nav>
         <Nav.Link>
           {
          user 
            ? <Button variant="outline-light" onClick={logout}>Logout</Button>
            : <Link   className = 'logCart' to='/login'><Button variant="outline-light">Login</Button></Link>
           } 
          <Link  className = 'logCart' to='/cart'>
            <CartWidget quantity={productQuantity} />
          </Link>         
         </Nav.Link>
         
        
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    )
}

export default NavBar;