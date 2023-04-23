//Config driven UI

import React from "react";
import ReactDOM from "react-dom/client";
// Default import
// import Title from "./Title";
//Named importing
// import {Nav} from "./Title"
import * as obj from "./components/Title";
import Fotter from "./components/Fotter";
import Body from "./components/Body";


const Applayout=()=>{
    return (<React.Fragment>
        <obj.Nav/>
        <Body/>
        <Fotter/>
    </React.Fragment>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(Applayout())