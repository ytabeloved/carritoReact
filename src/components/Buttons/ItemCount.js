import {useState, useContext} from 'react';
import NotificationContext from '../../context/NotificationContext'
import {Button} from 'react-bootstrap'

const ItemCount = ({product, productsAdded, addProdFunction, setCount})=> {
    const [quantity,setQuantity] = useState(0)
    const { setNotification } = useContext(NotificationContext)

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
        const newProduct = {
            ...product,
            quantity: quantity
        }
        setCount(quantity) 
        addProdFunction([...productsAdded, newProduct])
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