import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {db} from "../services/firebase"

import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false)

    const {cart, isInCart, clearCart } = useContext (CartContext)

    const createOrder = async () => {
        setLoading(true)
        try{
        const objOrder = {

            buyer:{
                firstName:"Dante",
                lastName:"Pendino",
                pohne:"245123652",
                adress:"rosario",
            },
            items: cart,
            total:cart.reduce((acc,item)=>acc+=(item.price*item.quantity),0),
            date: new Date()


        };
        const ids = cart.map((item)=> item.id);

        const productRef = collection(db, "products");

        const productsAddedFromFirestore = await getDocs(
            query(productRef, where(documentId(),"in", ids)))
            const {docs} = productsAddedFromFirestore;
            
            const outOfStock = [];
            const batch = writeBatch(db)

            docs.forEach((doc) =>{
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock;

                const productAddedToCart = cart.find((prod)=> prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity

                if(stockDB >= prodQuantity){


                    batch.update(doc.ref,{stock: stockDB - prodQuantity})
                }else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
                });

                if(outOfStock.length === 0){
                    await batch.commit();

                    const orderRef = collection(db, "orders");
                    const orderAdded = addDoc(orderRef, objOrder);

                    console.log(`el id de su orden es : ${orderAdded.id}`);
                    clearCart()
                    setOrderCreated(true)

                }else {
                    console.log("hay productos que estan fuera de stock")
                }
}catch(error){
    console.log(error)
}finally{
    setLoading(false)
}

}
    if(loading) {
        return <h1>se esta generando su orden</h1>

    }
    if(orderCreated){
        return(
            <h1>la orden fue creada</h1>
        )
    }


    return (
    <>

        <h1>checkout</h1>
        {}
        <button className="Otion" onClick={createOrder}>Generar Orden</button>
    
    </>
    )
}

export default Checkout