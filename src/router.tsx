import { createBrowserRouter } from "react-router-dom"
import { DefaultLayout } from "./components/default-layout/default-layout"
import { navbarLinks } from "./components/nav-bar/nav-bar"

export default createBrowserRouter(
    navbarLinks.map((link) => ({ 
        path: '/', 
        element: <DefaultLayout />,
        children: [
            {
                path: link.directTo,
                element: link.page,
            },
        ]
    }))
)
