import { useEffect, useState } from 'react'
import { getProductById } from '../async.Mock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const[carga, setCarga] = useState(true)

    const {itemId} = useParams()


    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })
            .finally (()=>{
                setCarga(false)
            })
    }, [itemId])



    
    return (
        <div className='ItemDetailContainer'>
            {carga ? <h1>Cargando....</h1> : <ItemDetail{...product}/>}
        </div>
    )
}

export default ItemDetailContainer