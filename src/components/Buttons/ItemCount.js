import {useState, useContext, useEffect} from 'react';
import NotificationContext from '../../context/NotificationContext'
import {Button} from 'react-bootstrap'
import CartContext from '../../context/CartContext'

const ItemCount = ({product, setCount})=> {
    const [quantity, setQuantity] = useState(0)
    const { setNotification } = useContext(NotificationContext)
    const { addItem, isInCart, getProduct } = useContext(CartContext)

    useEffect(() => {
        if(isInCart(product.id)) {
           const oldQuantity = getProduct(product.id)?.quantity
           setQuantity(oldQuantity)
        }
        return(() => {
            setQuantity(0)
        })
    }, [product, getProduct, isInCart])

    const onAdd = () => {
        if(quantity < product.stock) {
            setQuantity(quantity+1)
        }
    }

    const onRemove = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }     
    }

    const onAddtoCart = () =>{
        addItem(product, quantity)
        setCount(quantity) 
        setNotification('success', `${product.name} ha sido agregado al carrito`)
    }


    
    return(
        <div align="center">          
            <table >
                <tbody>
                    <tr>
                        <td align="left"><Button variant="outline-dark" onClick={()=> onRemove() }>-</Button></td>
                        <td align="center" style={{fontSize : '20px'}}>{quantity}</td>
                        <td align="right"><Button variant="outline-dark" onClick={() => onAdd() }>+</Button></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="5"><Button variant="outline-dark" onClick={()=>onAddtoCart()}>Agregar al carrito</Button></td>
                    </tr>

                </tbody>
            </table>       
        </div>
    )

}
export default ItemCount