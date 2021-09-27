import ItemCard from '../Product/Item'

function ItemListContainer(props) { 
    return (
        <>
        <h1>Nuestros Productos</h1>
        <p>hola {props.saludo}</p>
        <div className="container">
            <ItemCard name='item test' />
        </div>
        </>
    )
}

export default ItemListContainer;