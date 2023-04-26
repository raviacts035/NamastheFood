import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./shimmer"

const RestaurentItems=()=>{
    const [restroItems,setRestroItems]=useState()
    const [restroInfo,setRestroInfo]=useState([])
    const {id}=useParams()
    //clickable cards -> id
        //href url+id

    //Fetch data of card(ID)
        //Full Card Info-> Placed
    useEffect(()=>{
        getData()
    },[])

    async function getData()
    {
        try{
            var rdata= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.5057232&lng=80.049922&restaurantId="+id)
            //resId
        }
        catch(error){
            console.error("Unable to fetch data")
            return
        }
        rdata=await rdata.json()
        setRestroInfo(rdata?.data?.cards[0]?.card?.card)
        setRestroItems(rdata.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }


    return (!restroItems)?<Shimmer/>:(
        <><h2 className="RestaurentInfo">{restroInfo?.info?.name}</h2>
        <ul>{restroItems.map((r)=>{
            return <li key={r.card?.info?.id}>{...r.card?.info.name}</li>
        })}
        </ul>
        </>
    )
}

// restroItems.map((r)=>{
//     <li>{...r.card?.info.name}</li>
// })
const RestaurentItem=({name})=>{
    return (
        <>
            <h3>{name}</h3>
        </>
    )
}

export default RestaurentItems