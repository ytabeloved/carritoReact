import './Cart.css'
import ItemList from "../ItemList/ItemList"
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const Cart = ({ productsAdded, addProdFunction }) => {
    return <div>
        <h1>Cart</h1>
        <Button variant="outline-dark" onClick={() => addProdFunction([]) && <Link to ='/home' ></Link>} >Cancelar compra</Button>
        <ItemList products={productsAdded} />

    </div>
}
export default Cart