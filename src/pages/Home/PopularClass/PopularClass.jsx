import { useEffect, useState } from "react";

const PopularClass = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("https://yoga-flight-server.vercel.app/popularclasses")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);
  console.log(popular);
  return (
    <div className="mt-36">
      <h1 className="text-center my-16 text-3xl md:text-5xl font-bold">
        Our Popular Classes Based On Enrollment
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {popular &&
          popular.map((item) => (
            <div
              key={item._id}
              className={` my-4 card md:w-96 shadow-xl ${
                item.availableSeats ? "bg-base-100" : "bg-red-200"
              }  hover:shadow-6xl hover:-translate-y-2 hover:scale-105 transition duration-500`}
            >
              <figure className="h-48 md:h-52">
                <img src={item.image} alt={item.name} />
              </figure>
              <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
                ${item.price}
              </p>
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title">Course Name: {item.name}</h2>
                <h2 className="card-title">
                  Instructor: {item.instructorName}
                </h2>
                <p>Total Seats: {item.totalSeats}</p>
                <p> Available Seats: {item.availableSeats}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularClass;
