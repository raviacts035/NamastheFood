const { useState, useEffect } = require("react")

const useIsOnline=()=>{
    const [isOnline,setIsOnline]=useState(false)
    useEffect(()=>{
      const ifOnline=()=>{
          setIsOnline(true);
      };
      const ifOffline=()=>{
        setIsOnline(false);
      }
      window.addEventListener("offline",ifOnline);
      window.addEventListener("online",ifOffline)
      return ()=>{
        window.removeEventListener("offline",ifOnline)
        window.removeEventListener("online",ifOffline)
      }
    },[])
    return isOnline
}

export default useIsOnline