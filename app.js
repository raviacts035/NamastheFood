//Config driven UI Page
import React,{ lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import * as obj from "./components/Title";
import Fotter from "./components/Fotter";
import Body from "./components/Body";
import RestaurentItems from "./components/RestaurentItems";
import {Contact} from "./components/nav-items";
import {Error} from "./components/ErrorPage";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import OfflinePage from "./components/OfflinePage";
import Shimmer from "./components/shimmer";


//Lazy loading Insta Mart
const InstaMart =lazy(()=>import("./components/InstaMart"));
const About=lazy(()=>import('./components/nav-items'))


const Applayout=()=>{
    return (<>
        <obj.Nav/>
        <OfflinePage />
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
                path:"About",
                element:(<Suspense fallback={<h3>About Page Loadin.....</h3>}>
                    <About />
                    </Suspense>)
            },
            {
                path: "contact",
                element:<Contact />
            },
            {
                path:"restaurent/:id",
                element:<RestaurentItems />
            },
            {
                path:"InstaMart",
                element:(<Suspense fallback={<Shimmer/>}>
                    <InstaMart/>
                    </Suspense>)
            },
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRoutes}/>)

{/* <RouterProvider router={appRoutes}/> */}