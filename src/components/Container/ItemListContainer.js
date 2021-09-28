import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../products'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const {categoryid} = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const list = getProducts(categoryid)
        list.then(list => {
            setProducts(list)
            setLoading(false)
        })

        return (() => {
            setProducts([])
            setLoading(true)
        })

    }, [categoryid])


    return (
        <div className="ItemListContainer" >
             { loading ? "Loading.." : <ItemList products={products}/> }
        </div>
    )    
    
}

export default ItemListContainer