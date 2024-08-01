import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contacts";
import Error from "./src/components/Error"

const AppLayout = () => (
    <div className="swiggyApp">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
);

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            }, 
            {
                path: "/contact",
                element: <Contact/>,
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>)