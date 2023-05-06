import { useState } from "react";

export const Nav =()=>{

    const [isLogedIn,setIsLogedIn]=useState(false)
    return (
        <div className="headder">
            <Title/>
            <ul className="nav-items">
                <a href="./">Home</a>
                <a href="./About">About</a>
                <a href="./Contact">Contact</a>
                <a href="./InstaMart">Insta Mart</a>
                <h4>Cart</h4>
                {isLogedIn?<button onClick={()=>{setIsLogedIn(false)}}>LogOut</button>:<button onClick={()=>{setIsLogedIn(true)}}>LogIn</button>}
            </ul>
        </div>
    );
}

const Title=()=>{
    return (
        <h2>Food Street</h2>
    )
}

export default Title;