import { useState, useContext, useRef } from 'react'
import './Cart.css'
import ItemList from "../ItemList/ItemList"
import Togglable from '../Toggable/Togglable'
import ContactForm from '../ContactForm/ContactForm'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../context/NotificationContext'
import { createOrder } from '../../services/firebase/firebase'
import { useHistory } from 'react-router'

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        phone: '',
        address: '',
        comment: ''
    })
    const { products, clearCart, getTotal } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)
    const contactFormRef = useRef()
    const history = useHistory()

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            items: products,
            total: getTotal(),
            phone: contact.phone,
            address: contact.address,
            comment: contact.comment
        }
         
        createOrder(objOrder).then(msg => {
            setNotification('success', msg)
        }).catch(error => {
            setNotification('error', error)
        }).finally(() => {
            setProcessingOrder(false)
            clearCart()
            setContact({
                phone: '',
                address: '',
                comment: ''
            })
            history.push('/category/celulares')
        })
    }


    return ( 
        <div>
            <h1>Cart</h1>
            {(products.length > 0 && !processingOrder) && <h3>Total: ${getTotal()}</h3>}
            {(!processingOrder && products.length > 0) && <button onClick={() => clearCart()} className="Button">Cancelar compra</button>}
            {(!processingOrder && products.length > 0) && <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>}
            {(!processingOrder && contact.phone !== '' && contact.address !== '' && contact.comment !== '') &&
                <div>
                    <h4>Telefono: {contact.phone}</h4>
                    <h4>Direccion: {contact.address}</h4>
                    <h4>Comentario: {contact.address}</h4>
                    <button onClick={() => setContact({ phone: '', address: '', comment: ''})} className='Button' style={{backgroundColor: '#db4025'}}>Borrar datos de contacto</button>
                </div>    
            }
            {(!processingOrder && products.length) > 0 && <Togglable buttonLabelShow={(contact.phone !== '' && contact.address !== '' && contact.comment !== '') ? 'Editar contacto' : 'Agregar contacto'} ref={contactFormRef}>
                                                            <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                                                          </Togglable> }
            {!processingOrder ? <ItemList products={products} /> : 'Procesando Orden'}
        </div>
    )
}

export default Cart