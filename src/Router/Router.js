const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Home/Home");
const { default: Main } = require("../Main/Main");
const { default: Shortener } = require("../page/Shortener/Shortener");


const router=createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/short",
                element:<Shortener/>
            }
        ]

    }
])

export default router;