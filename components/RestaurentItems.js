import { useParams } from "react-router-dom"
import Shimmer from "./shimmer"
import useFetchData from "../Hooks/useFetchData"
import {Restro_Items_URL} from "../utils/helper"


const RestaurentItems=()=>{
    const {id}=useParams();

    const Info=useFetchData(Restro_Items_URL+id)
    //Restro main banner Info, Part-1
    const restroInfo=Info?.data?.cards[0]?.card?.card
    //Restro Grouped Card Collection, Part-2
    const restroItems=Info?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (!restroInfo)?<Shimmer/>:(
        <>
        {/* Restro Banner (Part-1) */}
        <div className="">
            <h2 className="RestaurentInfo">{restroInfo?.info?.name}</h2>
            {/* Left Div */}
            <div>
                <p className="basis-1/3 text-[10px]">{restroInfo?.info.cuisines.join(", ")}</p>
                <p className="basis-1/3 text-[10px]">{restroInfo?.info.areaName} {restroInfo?.info.sla?.lastMileTravelString}</p>
            </div>
            {/* Right Div */}
            <div>

            </div>
            <p className="text-[10px]">{restroInfo?.info?.feeDetails?.message}</p>
        </div>
        <hr></hr>
        <p>{restroInfo?.info.sla?.slaString} {restroInfo?.info?.costForTwoMessage}</p>
        <hr></hr>
        <ItemGroup par={restroItems}/>
        </>
    )
}

// Item group ==> Item Card
const ItemGroup=(par)=>{
    console.log(par.par)
    return (
        <section>
            <h3><b>{par.par.title}</b></h3>
            <hr></hr>
            <ul>{par.par.itemCards.map((r)=>{
            return <li key={r.card?.info?.id}>{...r.card?.info.name}</li>
        })}
        </ul>
        </section>
    )
}


export default RestaurentItems