import { useState, useEffect, useContext } from 'react'
import { Navbar, Nav, Container,NavDropdown, Button } from 'react-bootstrap';
import CartWidget from '../Widget/CartWidget';
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext';
import NotificationContext from '../../context/NotificationContext'
import { getCategories} from '../../services/firebase/firebase'


const NavBar = () => {
  const [categories, setCategories] = useState()
  const { user, logout } = useContext(UserContext)
  /*const { getQuantity } = useContext(CartContext)*/
  const { setNotification } = useContext(NotificationContext)

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    }).catch((error) => {
      console.log(error)
    })
    return () => {
      setCategories()
    }
  }, [])

  const handleLogout = () => {
    logout()
    setNotification('error', `Hasta luego ${user}`)
  } 

return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><Link className='linkNavbar' to="/home">Cosmic Connections</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown title="Cristales y mas" id="collapsible-nav-dropdown">
            {categories?.map(category => <NavDropdown.Item ><NavLink key={category.id} to={`/category/${category.id}`} className='Option' activeClassName="NavLink">{category.description}</NavLink></NavDropdown.Item>)}
        </NavDropdown>
        <Nav.Link><Link className='linkNavbar' to="/Otros">Otros</Link></Nav.Link>
        <Nav.Link><Link className='linkNavbar' to="/Blog">Blog</Link></Nav.Link>       
        </Nav>
        <Nav>
         <Nav.Link>
           {
          user 
            ? <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            : <Link   className = 'logCart' to='/login'><Button variant="outline-light">Login</Button></Link>
           } 
          <Link  className = 'logCart' to='/cart'>
            <CartWidget />
          </Link>         
         </Nav.Link>
         
        
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    )
}

export default NavBar;