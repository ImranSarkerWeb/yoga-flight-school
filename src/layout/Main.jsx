import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        {" "}
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
