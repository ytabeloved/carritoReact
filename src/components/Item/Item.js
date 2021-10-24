import { Link } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import './Item.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const Item = ({ product }) => {

  const { removeProduct } = useContext(CartContext)

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.img} alt={product.name} className="ItemImg" />
     <Card.Body>
      <Card.Title className="ItemHeader">{product.name}</Card.Title>
      <Card.Text className="Info">
        <h6 className="Info">
          {`Categoria: ${product.category} `}
        </h6>
        <h6 className="Info">
          {`Precio: ${product.price} `}
        </h6>
        { product.quantity &&       
          <h6 className="Info">
            {`Cantidad a comprar: ${product.quantity} `}
          </h6>
        }
        { product?.quantity 
          ? <button onClick={() => removeProduct(product.id)} className="Button">Quitar del carrito</button> 
          : <Link to={`/item/${product.id}`} className="Button">Comprar</Link> }
      </Card.Text>    
      <Button variant="outline-dark">{ !product.quantity && <Link to={`/item/${product.id}`} >Comprar</Link> }</Button>
     </Card.Body>
    </Card>
    
    )
}
export default Item