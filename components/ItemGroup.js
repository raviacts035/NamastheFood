import { useState } from "react"
import ItemCard from "./ItemCard"

const ItemGroup=({itemCards,title})=>{
    // console.log(par.par)
    const [isVisible,setIsVisible]=useState(true)

    function setVisibility(){
        setIsVisible(!isVisible)
    }
    return (
        <section className="py-2" key={title}>
            <div className="flex justify-between">
                <span className="font-bold">{title} </span>
                <button onClick={()=>{
                    setVisibility()
                }}>
                    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
            </div>
            {isVisible?<div id="dropdown">
                {itemCards.map((r)=>{
                return <>
                    <hr className="my-2 border-1 w-full"/>
                    <ItemCard key={r?.card?.info.id} {...r?.card}/>
                </>
                })}
            </div>:<></>}
        </section>
    )
}

export default ItemGroup