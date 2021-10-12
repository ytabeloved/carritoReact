import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import {db} from '../../services/firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore'


const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const {categoryid} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if(!categoryid){
            setLoading(true)
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch((error) => {
                console.log('error searching item fml!!', error)
            }).finally(()=>{
                setLoading(false)
            })
        } else {
            setLoading(true)
            getDocs(query(collection(db, 'items'), where ('category', '==', categoryid))).then((querySnapshot)=> {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch((error) => {
                console.log('error searching item', error)
            }).finally(() => {
                setLoading(false)
            })

        }
    }, [categoryid])


    
    /*useEffect(() => {
        const list = getProducts(categoryid)
        list.then(list => {
            setProducts(list)
            setLoading(false)
        })

        return (() => {
            setProducts([])
            setLoading(true)
        })

    }, [categoryid])*/

   

   

    return (
        <div className="ItemListContainer" >
             { loading ? "Loading.." : <ItemList products={products}/> }
        </div>
    )    
    
}

export default ItemListContainer