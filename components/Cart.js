import {useSelector} from "react-redux";
import CartItemCard from "./CartItemCard";
import { useState,useCallback } from 'react';


const Cart=()=>{
    const CartItems=useSelector(store=>store.cart.items)    
    return (
        <>
        <section className="px-[100px] w-min mx-auto sm:w-[640px] lg:w-[860px] 2xl:w-[1080px]">
        <h2 className="py-4">Cart ({CartItems.length})</h2>
            {CartItems.map(item=>{
                return <CartItemCard {...item}/>
            })}
        </section>
        </>
    )
}

export default Cart