import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body=()=>{
    const [searchTxt,setSearchTxt]=useState("");
    const [searchClicked,setSearchClicked]=useState("False");   //Creating Local variable, React
    const [allRestroList, setAllRestroList]=useState([]);
    //modifying and filtering this temp var
    const [fliterSrchList,setFilterSrchList]=useState([]);
    useEffect(()=>{
      getData()  
    },[])
    async function getData()
    {
        var rdata= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=15.5057232&lng=80.049922")
        rdata=await rdata.json()
        setAllRestroList(rdata?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilterSrchList(rdata?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

    }
    return (fliterSrchList.length==0) ? <Shimmer/> : (
    <>
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
            const data=filterList(searchTxt,allRestroList);
            setFilterSrchList(data)
        }}
        >serach</button>
        <div className="body">
        {
            fliterSrchList.map((r)=>{
                return <RestroCard {...r.info}/>
            })
        }
        </div>
    </>
    );
}
//on button click, Fn call => restroList filter with KeyWORD => filter result => setSearchList=


//Search Functionality
function filterList(searchTxt,allRestroList){
    let data=allRestroList.filter((e)=>{return e.info.name.includes(searchTxt)})
    return data;
}
export const RestroCard=({name,cuisines,cloudinaryImageId}) =>{
    return (
        <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h4 className="cusin">{cuisines.join(", ")}</h4>
        </div>
    )
}

export default Body