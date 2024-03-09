import { useEffect, useState } from 'react'
import { getProductById } from '../async.Mock'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById("1")
            .then(response => {
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [])
    
    return (
        <div>
            <itemDetail{...product}/>
        </div>
    )
}

export default ItemDetailContainer