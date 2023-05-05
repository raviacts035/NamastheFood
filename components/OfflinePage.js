import { useState } from "react"
import useIsOnline from "../Hooks/useIsOnline"

const OfflinePage=()=>{
    return useIsOnline?"":(
    <>
    <h2>You, Are Offline Brother....Lol</h2>
    </>
)
}

export default OfflinePage