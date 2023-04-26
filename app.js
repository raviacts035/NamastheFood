//Config driven UI Page
import React from "react";
import ReactDOM from "react-dom/client";
import * as obj from "./components/Title";
import Fotter from "./components/Fotter";
import Body from "./components/Body";
import RestaurentItems from "./components/Restaurent";
import {About, Contact} from "./components/nav-items";
import {Error} from "./components/ErrorPage";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";


const Applayout=()=>{
    return (<>
        <obj.Nav/>
        <Outlet />
        <Fotter/>
    </>
    )
};

const appRoutes=createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"about",
                element:<About />
            },
            {
                path: "contact",
                element:<Contact />
            },
            {
                path:"restaurent/:id",
                element:<RestaurentItems />
            }
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRoutes}/>)

{/* <RouterProvider router={appRoutes}/> */}