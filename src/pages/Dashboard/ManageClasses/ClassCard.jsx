/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useState } from "react";

const ClassCard = ({ classItem }) => {
  const [status, setStatus] = useState(classItem.status);

  const handleClass = (id, status) => {
    fetch(`http://localhost:5000/classes/admin/${id + "+" + status}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setStatus(status);
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Class is ${status}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleFeedback = async (id) => {
    const { value: text } = await Swal.fire({
      title: "Send Feedback",
      input: "textarea",
      inputPlaceholder: "Enter your feedback here...",
      showCancelButton: true,
      confirmButtonText: "Send",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value) {
          return "Please enter your feedback";
        }
      },
    });
    console.log(text);
    if (text) {
      fetch(`http://localhost:5000/feedback/admin/${id + "+" + text}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Feedback Submitted: ${text}!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
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
            onClick={() => handleClass(_id, "Approved")}
            className="btn btn-success btn-xs"
          >
            Approve
          </button>
          <button
            disabled={status === "Approved" || status === "Denied"}
            onClick={() => handleClass(_id, "Denied")}
            className="btn btn-error btn-xs"
          >
            Deny
          </button>
          <button
            onClick={() => handleFeedback(_id)}
            className="btn btn-info btn-xs"
          >
            Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
