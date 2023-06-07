import { Link, Outlet } from "react-router-dom";
// import Header from "../../components/Header/Header";
import NavBar from "../NavBar/NavBar";

function Layout() {
    return (
        <div className="">
            <div>
                <NavBar />
            </div>
            <div >
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;
