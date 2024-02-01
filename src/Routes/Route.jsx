import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import ShowDetails from "../Pages/ShowDetails/ShowDetails";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/showDetails/:id',
                element:<ShowDetails></ShowDetails>,
                loader:({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
            }
        ]
    }
])