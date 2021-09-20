import { Button} from 'react-bootstrap';
import {useState} from 'react'

var [count, setCount] = [];


function ItemCount() {
    [count, setCount] = useState(0)
    let stock = 10;

    const resta = () => {
        if(count <= 0){
            console.log("paso")
        }
        else {
            setCount = count - 1
            return setCount
        }
    }

    const addItem = (stock) =>{
        if(stock <= 0){
            console.log("no hay stock suficiente")
        }
        else {
            setCount = count + 1
            return setCount
        }
    }

    return (
        <>
        <Button onClick={resta(count)} variant="primary">-</Button>
        <Button onClick={addItem(stock, count)} variant="primary">+</Button>
        </>
    )


}

export default ItemCount;
export {count};