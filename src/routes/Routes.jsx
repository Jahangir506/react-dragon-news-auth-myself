import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./Private/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>  fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;