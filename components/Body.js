import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchData  from "../Hooks/useFetchData";
import Shimmer from "./shimmer";
import { RestroList_URL } from "../utils/helper";
import RestroCard from "./RestroCard";

const Body=()=>{
    const [searchTxt,setSearchTxt]=useState("");
    const rdata=useFetchData(RestroList_URL)
    console.log(rdata)
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


export default Body