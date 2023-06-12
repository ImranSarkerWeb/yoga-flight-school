import { motion } from "framer-motion";
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
import useRole from "../hooks/useRole";

const Dashboard = () => {
  const role = useRole();
  localStorage.setItem("role", role[0]);
  const admin = role[0] == "admin";
  const instructor = role[0] == "instructor";

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
          {admin && (
            <>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NavLink to="/dashboard/adminhome">
                  <FaHome /> Admin Home
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <NavLink to="/dashboard/manageclass">
                  <FaUniversity /> Manage Class
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <NavLink to="/dashboard/allusers">
                  <FaUsers /> Manage All User
                </NavLink>
              </motion.li>
            </>
          )}
          {instructor && (
            <>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NavLink to="/dashboard/instructorhome">
                  <FaHome /> Instructor Home
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <NavLink to="/dashboard/addclass">
                  <FaPlusSquare /> Add a Class
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <NavLink to="/dashboard/instructorclass">
                  <FaUniversity /> My Classes
                </NavLink>
              </motion.li>
            </>
          )}
          {!admin && !instructor && (
            <>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NavLink to="/dashboard/userhome">
                  <FaHome /> Student Home
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <NavLink to="/dashboard/paymenthistory">
                  <FaWallet /> Payment History
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <NavLink to="/dashboard/enrolled">
                  <FaChalkboardTeacher /> My Enrolled Class
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart /> My Selected Classes
                </NavLink>
              </motion.li>
            </>
          )}
          <motion.div
            className="divider"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
