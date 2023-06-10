import {
  FaChalkboardTeacher,
  FaHome,
  FaPlusSquare,
  FaShoppingCart,
  FaUniversity,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const admin = true;
  const instructor = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-orange-700 text-base-content">
          {/* Sidebar content here */}
          {admin ? (
            <>
              {/* Admin dashboard */}
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  {" "}
                  <FaUniversity></FaUniversity> Manage Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> Manage All User
                </NavLink>
              </li>
            </>
          ) : instructor ? (
            <>
              {" "}
              {/* instructor dashboard */}
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addclass">
                  {" "}
                  <FaPlusSquare></FaPlusSquare>Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaUniversity></FaUniversity> My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* Studentt dashboard */}
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome> Student Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/">
                  {" "}
                  <FaWallet></FaWallet>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaChalkboardTeacher></FaChalkboardTeacher> My Enrolled Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
