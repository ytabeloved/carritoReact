import './Item.css';

function ItemCard(props){
    return (
        <div>
            <h2 className="heading">{props.name}</h2>

        </div>
    )
}

export default ItemCard;