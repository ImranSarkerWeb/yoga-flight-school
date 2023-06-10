/* eslint-disable react/prop-types */

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const ClassCard = ({ classItem }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    name,
    image,
    price,
    instructorName,
    totalSeats,
    availableSeats,
    _id,
  } = classItem;

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = { courseId: _id, name, image, price, email: user.email };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Course added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the Course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div
      className={` my-4 card w-96 shadow-xl ${
        availableSeats ? "bg-base-100" : "bg-red-200"
      }  hover:shadow-6xl hover:-translate-y-2 hover:scale-105 transition duration-500`}
    >
      <figure className="h-52">
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">Course Name: {name}</h2>
        <h2 className="card-title">Instructor: {instructorName}</h2>
        <p>Total Seats: {totalSeats}</p>
        <p> Available Seats: {availableSeats}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(classItem)}
            className="py-2 px-4 bg-gradient-to-r from-orange-500 to-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Select Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
