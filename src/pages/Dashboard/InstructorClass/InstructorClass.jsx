import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const InstructorClass = () => {
  const { user } = useAuth();
  const [myClasses, setMyClasses] = useState();

  useEffect(() => {
    fetch(`https://yoga-flight-server.vercel.app/instructors/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, [user]);
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {myClasses &&
        myClasses.map((myClass) => (
          <div
            key={myClass._id}
            className={` my-4 card w-96 shadow-xl bg-base-100`}
          >
            <figure className="h-52">
              <img src={myClass.image} alt={myClass.name} />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
              ${myClass.price}
            </p>
            <div className="card-body flex flex-col items-center">
              <h2 className="card-title">Course Name: {myClass.name}</h2>
              <h2 className="card-title">
                Instructor: {myClass.instructorName}
              </h2>
              <p
                className={`badge ${
                  myClass.status === "Pending"
                    ? "badge-warning"
                    : myClass.status === "Approved"
                    ? "badge-success"
                    : "badge-error"
                }`}
              >
                Status: {myClass.status}
              </p>

              <p> Available Seats: {myClass.availableSeats}</p>
              <p>Total Enrolled Student: {myClass.enrolled}</p>
              <p>
                {myClass.status === "Pending" || myClass.status === "Approved"
                  ? ""
                  : `Feedback: ${myClass?.feedback}`}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">Update</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default InstructorClass;
