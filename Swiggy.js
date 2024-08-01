import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contacts";

const AppLayout = () => (
    <div className="swiggyApp">
        <Header/>
        <Body/>
        <Footer/>
    </div>
);

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
    }, 
    {
        path: "/about",
        element: <About/>,
    }, 
    {
        path: "/contact",
        element: <Contact/>,
    }, 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>)