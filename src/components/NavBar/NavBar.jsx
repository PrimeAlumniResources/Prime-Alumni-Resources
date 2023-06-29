import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toProfile = () => {
    return navigate("/profile");
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    // return navigate("/landing-page");
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className=" fixed top-0 left-0 z-40 w-64 h-screen"
        aria-label="Sidebar"
      >
        <div className=" h-full px-3 py-4 overflow-y-auto  bg-emerald-300">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/home"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-emerald-200 dark:hover:bg-emerald-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>

                <span className="ml-3">Chat</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/profile"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-emerald-200 dark:hover:bg-emerald-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-200"></span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/editprofile"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-emerald-200 dark:hover:bg-emerald-200"
              >
                {/* <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg> */}
                <img
                  className="w-6 h-6 ml-1"
                  src="https://i.ibb.co/G09Rt9c/edit-2.png"
                  alt="edit-2"
                  border="0"
                />

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Edit Profile
                </span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/resource"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-emerald-200 dark:hover:bg-emerald-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">Resources</span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
              </NavLink>
            </li>

            {/* JOBS/YUHBOH */}

            <li>
              <NavLink to="/jobs">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-emerald-200 dark:hover:bg-emerald-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>

                  <span className="flex-1 ml-3 whitespace-nowrap">Jobs</span>
                </a>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="alumni-search"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-emerald-200 dark:hover:bg-emerald-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Alumni Search
                </span>
              </NavLink>
            </li>

            <li onClick={() => dispatch({ type: "LOGOUT" })}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-emerald-200 dark:hover:bg-emerald-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <span
                  className="flex-1 ml-3 whitespace-nowrap"
                  onClick={handleLogout}
                >
                  Log Out
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default NavBar;
