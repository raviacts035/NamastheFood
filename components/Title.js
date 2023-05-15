import { useState } from "react";
import store from "../utils/store";
import {useSelector} from "react-redux";

export const Nav =()=>{
    const [isLogedIn,setIsLogedIn]=useState(false)
    const cartItems=useSelector(store=>store.cart.items)
    return (
        <div className="flex justify-between w-[100%] px-12 py-4 border-2 border-black bg-orange-400 sticky top-0 shadow-xl">
            <Title/>
            <ul className="flex flex-wrap px-9 gap-5">
                <a href="./">Home</a>
                <a href="./About">About</a>
                <a href="./Contact">Contact</a>
                <a href="./InstaMart">Insta Mart</a>
            </ul>
                <div className="flex gap-4"><h4>Cart-{cartItems.length}</h4>
                {isLogedIn?<button className="border-black border-2" onClick={()=>{setIsLogedIn(false)}}>LogOut</button>:<button className="border-black border-2 px-2 rounded-lg" onClick={()=>{setIsLogedIn(true)}}>LogIn</button>}</div>
        </div>
    );
}

const Title=()=>{
    return (
        <h2>Food Street</h2>
    )
}

export default Title;