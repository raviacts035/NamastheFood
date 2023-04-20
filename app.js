import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>{
    return (
        <h2>Food Street</h2>
    )
}
const Applayout=()=>{
    return (<React.Fragment>
        <Nav/>
        <Body/>
        <Fotter/>
    </React.Fragment>)
}
const Nav =()=>{
    return (
        <div className="headder">
            <Title/>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <h4>Cart</h4>
            </ul>
        </div>
    );
}

const Body=()=>{
    return (
    <div className="body">
        {
            Restros.map((restro)=>{
                return <RestroCard {...restro.info}/>
            })
        }
        <RestroCard {...Restros[0].info}/>
    </div>
    )
}

const Fotter=()=>{
    return (<div className="fotter">

    </div>
    )
}

const RestroCard=({name,cuisines,cloudinaryImageId}) =>{
    return (
        <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h4 className="cusin">{cuisines.join(", ")}</h4>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(Applayout())