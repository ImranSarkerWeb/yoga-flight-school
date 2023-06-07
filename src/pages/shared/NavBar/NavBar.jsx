import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/yogaLogo.png";
import useAuth from "../../../hooks/useAuth";
const NavBar = () => {
  const { user } = useAuth();
  const navContent = (
    <>
      {" "}
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to="/instructors"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <a>Classes</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navContent}
          </ul>
        </div>
        {user ? (
          <Link className="flex items-center gap-3" to="/">
            {" "}
            <img src={logo} className=" w-16" />
            <h2 className="text-2xl font-semibold">Yoga Flight</h2>
          </Link>
        ) : (
          <Link className="btn btn-ghost btn-xs" to="/login">
            Login
          </Link>
        )}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navContent}</ul>
      </div>

      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
