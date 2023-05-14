import { useState } from "react"
import ItemCard from "./ItemCard"

const ItemGroup=(par)=>{
    // console.log(par.par)
    const [isVisible,setIsVisible]=useState(true)

    function setVisibility(){
        setIsVisible(!isVisible)
    }
    return (
        <section className="py-2" key={par.par.title}>
            <div className="flex justify-between">
                <span className="font-bold">{par.par.title} </span>
                <button onClick={()=>{
                    setVisibility()
                }}>
                    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
            </div>
            {isVisible?<div id="dropdown">
                {par.par.itemCards.map((r)=>{
                return <>
                    <hr className="my-2 border-1 w-full"/>
                    <ItemCard {...r?.card?.info}/>
                </>
                })}
            </div>:<></>}
        </section>
    )
}

export default ItemGroup