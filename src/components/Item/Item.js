import { Link } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import './Item.css'

const Item = ({ product }) => {

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.img} alt={product.name} className="ItemImg" />
     <Card.Body>
      <Card.Title className="ItemHeader">{product.name}</Card.Title>
      <Card.Text className="Info">
        <h6 className="Info">
          {`Categoria: ${product.categoryId} `}
        </h6>
        <h6 className="Info">
          {`Precio: ${product.price} `}
        </h6>
        { product.quantity &&       
          <h6 className="Info">
            {`Cantidad a comprar: ${product.quantity} `}
          </h6>
        }
      </Card.Text>    
      <Button variant="outline-dark">{ !product.quantity && <Link to={`/item/${product.id}`} >Comprar</Link> }</Button>
     </Card.Body>
    </Card>
    
    )
}
export default Item