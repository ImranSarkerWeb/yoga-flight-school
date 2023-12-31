import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Classes from "../pages/Classes/Classes";
import StudentCart from "../pages/Dashboard/StudentCart/StudentCart";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import InstructorClass from "../pages/Dashboard/InstructorClass/InstructorClass";
import AllClasses from "../pages/Dashboard/ManageClasses/AllClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
        loader: () =>
          fetch("https://yoga-flight-server.vercel.app/instructors"),
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
        loader: () => fetch("https://yoga-flight-server.vercel.app/classes"),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <StudentCart></StudentCart>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "enrolled",
        element: <EnrolledClasses></EnrolledClasses>,
        loader: () => fetch("https://yoga-flight-server.vercel.app/classes"),
      },

      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "userhome",
        element: "Student dashboard comming soon",
      },
      {
        path: "adminhome",
        element: "Admin dashboard comming soon",
      },
      {
        path: "instructorhome",
        element: "Instructor dashboard comming soon",
      },
      {
        path: "/dashboard/instructorclass",
        element: <InstructorClass></InstructorClass>,
      },
      {
        path: "/dashboard/manageclass",
        element: <AllClasses></AllClasses>,
        loader: () => fetch("https://yoga-flight-server.vercel.app/classes"),
      },
    ],
  },
]);
export default router;
