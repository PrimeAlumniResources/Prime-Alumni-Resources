import { Link, Outlet } from "react-router-dom";
// import Header from "../../components/Header/Header";
import NavBar from "../NavBar/NavBar";

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
