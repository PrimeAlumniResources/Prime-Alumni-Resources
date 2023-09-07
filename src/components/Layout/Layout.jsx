/**
* This file acts as the layout for the main app
* @author elijahlawson
* @version 6/28/2023
*/

import { Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

//React-router-dom uses this layout with the <Outlet /> component being whatever child class is used in app.jsx routes under layout
function Layout() {
    return (
        <div>
            <NavBar />
            <div className='ml-64'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;
