import { useEffect, useState } from "react"

const useFetchData=(xurl)=>{
    const [restroInfo,setRestroInfo]=useState(null);
    useEffect(()=>{
        getData(setRestroInfo)
    },[]);

    async function getData(setRestroInfo){
        const data=await fetch(xurl);
        const Info=await data.json();
        setRestroInfo(Info)
    }
    return restroInfo
}


export default useFetchData