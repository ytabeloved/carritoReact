import React from 'react'
import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) => {

  if(products.length === 0) {
    return <h3>No hay productos aun, espera el re-stock</h3>
  } 

  return (
    <ul className="list-group">
      {products.map(product =><Item key={product.id} product={product}/>)}
    </ul>
  )
}
export default React.memo(ItemList)