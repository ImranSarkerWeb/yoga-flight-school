import { Link } from "react-router-dom";
import errorImg from "../../../assets/error/errorpage.jpg";
const ErrorPage = () => {
  return (
    <div className="text-center my-8">
      <h3 className="font-semibold text-2xl">404!</h3>
      <h3 className="font-semibold text-2xl">Page Not Found</h3>
      <img className="mx-auto w-1/2" src={errorImg} alt="" />
      <Link to="/" className="font-semibold text-green-700 underline text-2xl">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
