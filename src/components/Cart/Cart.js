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
import { Button } from 'react-bootstrap'

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
            <h1>hola {user}! tienes en tu Carrito:</h1>
            {(!processingOrder && products.length) > 0 && <Togglable buttonLabelShow={(contact.phone !== '' && contact.address !== '' && contact.comment !== '') ? 'Editar contacto' : 'Agregar contacto'} ref={contactFormRef}>
                                                            <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                                                          </Togglable> }
            {!processingOrder ? <ItemList products={products} /> : 'Procesando Orden'}
            {(products.length > 0 && !processingOrder) && <h3>y tu total es: ${getTotal()} pesos</h3>}
            {(!processingOrder && products.length > 0) && <Button variant="outline-danger" onClick={() => clearCart()} className="Button">Cancelar compra</Button>}
            {(!processingOrder && products.length > 0) && <Button variant="outline-secondary" onClick={() => confirmOrder()} className="Button">Confirmar Compra</Button>}
            {(!processingOrder && contact.phone !== '' && contact.address !== '' && contact.comment !== '') &&
                <div>
                    <h4>Telefono: {contact.phone}</h4>
                    <h4>Direccion: {contact.address}</h4>
                    <h4>Comentario: {contact.comment}</h4>
                    <Button variant="outline-success" onClick={() => setContact({ phone: '', address: '', comment: ''})} className='Button' > Borrar datos de contacto</Button>
                </div>    
            }
           
        </div>
    )
}

export default Cart