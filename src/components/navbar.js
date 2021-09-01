import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';


const NavBar=()=>{
return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Carrito Random</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link eventKey={2} href="#memes">
        <CartWidget/>
        </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    )
}


const CartWidget = () =>{
    return (
        <>
        <img src="../assets/bill.png"  style={{height : 3 + 'em'}} alt="cart img" ></img>
        </>
    )

}

export default NavBar;