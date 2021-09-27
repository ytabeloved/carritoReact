import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import CartWidget from '../Widget/CartWidget';
import {Link} from 'react-router-dom'
import './navbar.css'

const NavBar=()=>{
return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><Link className='linkNavbar' to="/home">Cosmic Connections</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown title="Cristales y mas" id="collasible-nav-dropdown">
            <NavDropdown.Item ><Link className='insideLinkNavbar' to="/Crystal">Cristales</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link className='insideLinkNavbar' to="/Incense">Incienso</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><Link className='linkNavbar' to="/Otros">Otros</Link></Nav.Link>
        <Nav.Link><Link className='linkNavbar' to="/Blog">Blog</Link></Nav.Link>       
        </Nav>
        <Nav>
        <Nav.Link>
           <Link to="/Cart">
               <CartWidget/>
           </Link>        
        </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    )
}

export default NavBar;