import { useState } from 'react'
import './ContactForm.css'
import { Button } from 'react-bootstrap'

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            phone,
            address,
            comment
        }
        setContact(objContact)
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div className='ContactContainer'>
          <div className='Head'>Contacto</div>
          <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>Telefono:
              <input
                className='InputContact'
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'>Direccion:
              <input
                className='InputContact'
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'>Comentario: 
              <input
                className='InputContact'
                type='text'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
            </label>
            <Button variant="outline-success" className='Button' type='submit'>Confirmar</Button>
          </form>
        </div>
      )
}

export default ContactForm