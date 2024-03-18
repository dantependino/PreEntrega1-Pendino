import { useEffect, useState } from "react"
import { getProducts, getProductByCategory } from "../async.Mock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)




    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch (error => {
                console.error(error)

            })
            .finally (()=>{
                setLoading(false)
            })
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