/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useState } from "react";

const ClassCard = ({ classItem }) => {
  const [status, setStatus] = useState(classItem.status); // State variable for class status

  const handleUser = (id, role) => {
    fetch(`http://localhost:5000/classes/admin/${id + "+" + role}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setStatus(role); // Update the status in the state variable
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Class is ${role}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const {
    _id,
    name,
    image,
    price,
    instructorName,
    instructorEmail,
    availableSeats,
  } = classItem;

  return (
    <div className={`my-4 card w-96 shadow-xl bg-base-100`}>
      <figure className="h-52">
        <img src={image} alt={name} />
      </figure>

      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">Course Name: {name}</h2>
        <h2 className="card-title">Instructor: {instructorName}</h2>
        <p>Instructor Email: {instructorEmail}</p>
        <p>Available Seats: {availableSeats}</p>
        <p>Price: ${price}</p>
        <p>
          Status:{" "}
          <span
            className={`badge ${
              status === "Pending"
                ? "badge-warning"
                : status === "Approved"
                ? "badge-success"
                : "badge-error"
            }`}
          >
            {status}
          </span>
        </p>
        <div className="card-actions justify-end">
          <button
            disabled={status === "Approved" || status === "Denied"}
            onClick={() => handleUser(_id, "Approved")}
            className="btn btn-success btn-xs"
          >
            Approve
          </button>
          <button
            disabled={status === "Approved" || status === "Denied"}
            onClick={() => handleUser(_id, "Denied")}
            className="btn btn-error btn-xs"
          >
            Deny
          </button>
          <button className="btn btn-info btn-xs">Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
