import { useState, useContext } from 'react'
import ItemCount from '../Buttons/ItemCount'
import {Link} from 'react-router-dom' 
import UserContext from '../../context/UserContext';
import './ItemDetail.css'
import {Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap'

const ItemDetail = ({ product, productsAdded, addProdFunction }) => {
    const [count, setCount] = useState(0)
    const {user} = useContext(UserContext)

    if(!product) {
        return <h3>{`Ese producto ya no existe`}</h3>
    } 

    
    return (

        <Card style={{ width: '42rem' }}>
        <Card.Img variant="top" src={product.img} alt={product.name} className="ItemImg" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          {product.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
           <ListGroupItem>{`Categoria: ${product.category} `}</ListGroupItem>
           <ListGroupItem>{`Precio: ${product.price} `}</ListGroupItem>
           <ListGroupItem>{`Stock: ${product.stock} `}</ListGroupItem>
        </ListGroup>
        <Card.Body>
            {count === 0 && user
              ? <ItemCount product={product} productsAdded={productsAdded} addProdFunction={addProdFunction} setCount={setCount} />
              : user 
                  ? <Link to='/cart'><Button variant="outline-dark" className="Button">Ir al carrito</Button></Link>
                  : <Link to='/login'><Button variant="outline-dark" className="Button">Login</Button></Link> 
            }          
        </Card.Body>
        </Card>
    )
}
export default ItemDetail