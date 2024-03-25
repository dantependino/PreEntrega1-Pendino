import { useEffect, useState } from "react"
//import { getProducts, getProductByCategory } from "../async.Mock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'

import { db } from "../services/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)




    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")

        getDocs(collectionRef)
            .then((response)=> {
                //console.log(response)
                const products = response.docs.map((doc)=> {
                    return {id: doc.id, ...doc.data()};
                });
                setProducts(products);
            })
            .catch (error => {
                console.error(error);
        
            })
            .finally (()=>{
                setLoading(false);
            })
        // const asyncFunc = categoryId ? getProductByCategory : getProducts

        // asyncFunc(categoryId)
        //     .then(response => {
        //         setProducts(response)
        //     })
        //     .catch (error => {
        //         console.error(error)

        //     })
        //     .finally (()=>{
        //         setLoading(false)
        //     })
    },  [categoryId])

    if (loading){
        return <h1>Cargando Productos....</h1>
    }
    
    return (
        <div className="ItemListContainer">
            <h1>
                {greeting}
            </h1>
            <ItemList products={products}/>
        </div>
    )

}
export default ItemListContainer