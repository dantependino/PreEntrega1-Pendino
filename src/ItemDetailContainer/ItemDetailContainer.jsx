import { useEffect, useState } from 'react'
//import { getProductById } from '../async.Mock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { getDoc , doc} from 'firebase/firestore'
import { db } from '../services/firebase'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const[carga, setCarga] = useState(true)

    const {itemId} = useParams()


    useEffect(() => {
        getDoc(doc(db, "products", itemId))
            .then((respuesta) => {
                //console.log(response)
                const product = {id: respuesta.id, ...respuesta.data()}
                setProduct(product)
            })
            .catch((err) =>{
                console.error(err)

            })
            .finally(()=> {
                setCarga(false)
            })
        // getProductById(itemId)
        //     .then(response => {
        //         setProduct(response)
        //     })
        //     .catch(error =>{
        //         console.error(error)
        //     })
        //     .finally (()=>{
        //         setCarga(false)
        //     })
    }, [itemId])



    
    return (
        <div className='ItemDetailContainer'>
            {carga ? <h1>Cargando....</h1> : <ItemDetail{...product}/>}
        </div>
    )
}

export default ItemDetailContainer