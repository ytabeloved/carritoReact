import { Button} from 'react-bootstrap';
import {useState} from 'react'

function ItemCount(props) {
    var [setCount] = useState(0)


    const resta = (count) => {
        if(count <= 0){
            console.log("paso")
        }
        else {
            setCount = count - 1
            return setCount
        }
    }

    const addItem = (stock, count) =>{
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
        <Button onClick={resta({props.count})} variant="primary">-</Button>
        <Button onClick={addItem({props.stock}, {props.count})} variant="primary">+</Button>
        </>
    )


}

export default ItemCount;