import { useParams } from "react-router-dom"
import Shimmer from "./shimmer"
import useFetchData from "../Hooks/useFetchData"
import {Restro_Items_URL} from "../utils/helper"
import ItemGroup from "./ItemGroup"


const RestaurentItems=()=>{
    const {id}=useParams();

    const Info=useFetchData(Restro_Items_URL+id)
    //Restro main banner Info, Part-1
    const restroInfo=Info?.data?.cards[0]?.card?.card
    //Restro Grouped Card Collection, Part-2
    const ItemsGroups=Info?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
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
        <section>
            {ItemsGroups.map(e => {
                if (e?.card?.card.title){
                    return (<ItemGroup par={e.card.card}/>)
                }
            })}
        </section>
        </>
    )
}



export default RestaurentItems