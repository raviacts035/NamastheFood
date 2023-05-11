import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import { RestroList_URL } from "../utils/helper";
import useFetchData  from "../Hooks/useFetchData";

const Body=()=>{
    const [searchTxt,setSearchTxt]=useState("");
    const rdata=useFetchData(RestroList_URL)
    const allRestroList=rdata?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

    return (!allRestroList) ? <Shimmer/> : (
    <section className="flex flex-col items-center w-full">
        <div className="w-min sm:w-[640px] lg:w-[860px] 2xl:w-[1080px]">
            <input
            type="text" 
            className="serach-box"
            placeholder="Search..."
            onChange={(e)=>{
                setSearchTxt(e.target.value)
            }}
            value={searchTxt}
            />
            {/* onClicking button  */}
            <button className="serach-btn"
            onClick={()=>{
            fliterList()
            }}
            >serach</button>
        </div>
        <div className="flex flex-wrap gap-4 w-min sm:w-[640px] lg:w-[860px] 2xl:w-[1080px]">
        {
            allRestroList.map((r)=>{
                return <Link to={"./restaurent/"+r.info.id}><RestroCard {...r.info}/></Link>
            })
        }
        </div>
    </section>
    );
}

export const RestroCard=({name,cuisines,cloudinaryImageId,id,costForTwo,avgRating,sla}) =>{
    return (
        <div className="w-[200px] h-[33vh] p-2 hover:border-black border-2 flex flex-col" key={id}>
        <div className="basis-2/3">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
        </div>
        <div className="basis-1/3 flex flex-col">
            <h2 className="basis-1/3">{name}</h2>
            <p className="basis-1/3 text-[10px]">{cuisines.join(", ")}</p>
            <div className="basis-1/3 flex justify-between items-center text-[10px]">
                <div className="w-10 h-5 flex items-center bg-orange-400">
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className="p-1">{avgRating}</span>
                </div>
                <p>{sla.slaString}</p>
                <p>{costForTwo}</p>
            </div>
        </div>
        </div>
    )
}

export default Body