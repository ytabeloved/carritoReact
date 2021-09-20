import { Card, Button, CardGroup} from 'react-bootstrap';
import {useState} from 'react'

function ItemListContainer(props) {
    console.log('Hello world')
    const [count, setCount] = useState(0)
    console.log(count)
    console.log(setCount)
    const resta = () => {
        if(count<= 0){
            console.log("paso")
        }
        else {
            setCount(count - 1)
        }
    }


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
                <Button onClick={resta} variant="primary">-</Button>
                <Button onClick={()=> setCount(count + 1)} variant="primary">+</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/200/" />
            <Card.Body>
                <Card.Title>Anger</Card.Title>
                <Card.Text>
                Anger is a natural, though sometimes unwanted or irrational, emotion that everybody experiences from time to time.
                 Anger experts describe the emotion as a primary, natural emotion which has evolved as a way of surviving and 
                 protecting yourself from what is considered a wrong-doing..
                </Card.Text>
                <Button onClick={resta} variant="primary">-</Button>
                <Button onClick={()=> setCount(count + 1)} variant="primary">+</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/200/" />
            <Card.Body>
                <Card.Title>Sadness</Card.Title>
                <Card.Text>
                Sadness is an emotional pain associated with, or characterized by,
                 feelings of disadvantage, loss, despair, grief, helplessness,
                  disappointment and sorrow. An individual experiencing sadness may 
                  become quiet or lethargic, and withdraw themselves from others.
                </Card.Text>
                <Button onClick={resta} variant="primary">-</Button>
                <Button onClick={()=> setCount(count + 1)} variant="primary">+</Button>
            </Card.Body>
        </Card>
        </CardGroup>
        </div>

        </>
    )
}

export default ItemListContainer;