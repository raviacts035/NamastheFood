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
        <section className="flex flex-col items-center">
        {/* Restro Banner (Part-1) */}
        <div className="px-[100px] p-2 w-min sm:w-[640px] lg:w-[860px] 2xl:w-[1080px]">
            <h2 className="text-xl font-bold py-2">{restroInfo?.info?.name}</h2>
            {/* Left Div */}
            <div className="">
                <p className="basis-1/3 text-[10px]">{restroInfo?.info.cuisines.join(", ")}</p>
                <p className="basis-1/3 text-[10px]">{restroInfo?.info.areaName} {restroInfo?.info.sla?.lastMileTravelString}</p>
            </div>
            {/* Right Div */}
            <div>

            </div>
            <p className="flex gap-2 py-2 text-[10px]"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu" alt="bycikle"/>{restroInfo?.info?.feeDetails?.message}</p>
            <hr className="my-2 border-1 w-full"/>
        </div>
        <div>
            <div className="text-sm">{restroInfo?.info.sla?.slaString} {restroInfo?.info?.costForTwoMessage}</div>
        </div>
            <section className="px-[100px] w-min sm:w-[640px] lg:w-[860px] 2xl:w-[1080px]">
            {ItemsGroups.map(e => {
                if (e?.card?.card.title){
                    return (<ItemGroup par={e.card.card}/>)
                }
            })}
        </section>
        </section>
    )
}



export default RestaurentItems