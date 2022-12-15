import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import PortfolioProjectDetails from "../Home/Home Children/PortfolioProjectDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project-details',
                element: <PortfolioProjectDetails></PortfolioProjectDetails>
            }
        ]
    }
])

export default router;