import './CartWidget.css';
import { useContext } from "react";
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    return (
        <>
        <img src='/assets/shopping-bag-512.png'  style={{height : 2 + 'em'}} alt="cart img" />
        {getQuantity()}
        </>
    )

}

export default CartWidget;