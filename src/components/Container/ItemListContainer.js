import { Card, CardGroup} from 'react-bootstrap';
import ItemCount, {count} from '../Buttons/ItemCount'

function ItemListContainer(props) { 
    return (
        <>
        <h1>Nuestros Productos</h1>
        <h2 style={{color:"blue"}}>items en carro = {count}</h2>
        <p>hola {props.saludo}</p>
        <div className="container">
        <CardGroup>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/" />
            <Card.Body>
                <Card.Title>Confusion</Card.Title>
                <Card.Text>
                Confusion occurs when a person has difficulty understanding a situation or has disordered or unclear thoughts. 
                It can be accompanied by memory loss, disorientation, or the inability to think quickly. Confusion can increase
                 slowly over time or come on abruptly, depending upon the cause.
                </Card.Text>
                <ItemCount />
            </Card.Body>
        </Card>
        </CardGroup>
        </div>

        </>
    )
}

export default ItemListContainer;