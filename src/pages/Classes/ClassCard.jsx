/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const ClassCard = ({ classItem }) => {
  const {
    name,
    image,
    price,
    instructorName,
    totalSeats,
    availableSeats,
    _id,
  } = classItem;
  return (
    <div
      className={`card w-96 shadow-xl ${
        availableSeats ? "bg-base-100" : "bg-red-200"
      }`}
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
          <button className="py-2 px-4 bg-gradient-to-r from-orange-500 to-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
