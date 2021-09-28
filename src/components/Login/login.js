import { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'
import NotificationContext from '../../context/NotificationContext'
import { useHistory } from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault()

        const objUser = {
            username,
            password
        }

        login(objUser)
        setNotification('success', `Bienvenido ${objUser.username}`)
        history.push('/')
    }





    return (
      <div className= 'containerForm'>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type='text'
                value={username}
                onChange={({ target }) => setUsername(target.value)} />
        <Form.Text className="text-muted">
         We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type='password'
                value={password}
                onChange={({ target }) => setPassword(target.value)} />
        </Form.Group>
       <Button variant="outline-dark" type="submit">
       login
       </Button>
      </Form>
      </div>

      /*
        <div>
          <div>SignIn</div>
          <form onSubmit={handleLogin}>
            <div>Username
              <input
                type='text'
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </div>
            <div>Password
              <input
                type='password'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <button type='submit'>login</button>
          </form>
        </div>*/


      )
}

export default Login