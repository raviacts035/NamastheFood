import { useParams } from "react-router-dom"
import Shimmer from "./shimmer"
import useFetchData from "../Hooks/useFetchData"
import {Restro_Info_URL, Restros} from "../utils/helper"


const RestaurentItems=()=>{
    const {id}=useParams();

    const Info=useFetchData(Restro_Info_URL+id)
    const restroInfo=Info?.data?.cards[0]?.card?.card
    const restroItems=Info?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

    return (!restroInfo)?<Shimmer/>:(
        <><h2 className="RestaurentInfo">{restroInfo?.info?.name}</h2>
        <ul>{restroItems.map((r)=>{
            return <li key={r.card?.info?.id}>{...r.card?.info.name}</li>
        })}
        </ul>
        </>
    )
}

export default RestaurentItems