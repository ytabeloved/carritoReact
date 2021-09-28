import './CartWidget.css';

const CartWidget = (props)=> {
    
    return (
        <>
        <img src='/assets/shopping-bag-512.png'  style={{height : 2 + 'em'}} alt="cart img" />
        {props.quantity}
        </>
    )

}

export default CartWidget;