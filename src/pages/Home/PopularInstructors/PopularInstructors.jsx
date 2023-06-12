import { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://yoga-flight-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);

  return (
    <div className="mt-36 mb-12">
      <h1 className="text-center my-16 text-3xl md:text-5xl font-bold">
        Our Popular Instructors
      </h1>
      <div className="grid gap-4 md:grid-cols-3">
        {instructors &&
          instructors.slice(0, 6).map((instructor) => (
            <div
              key={instructor._id}
              className="max-w-sm h-64 rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <div className="avatar flex items-center justify-center">
                <div className="w-36 shadow-lg rounded-full">
                  <img
                    className="border-4 border-green-600 rounded-full ring-2 ring-blue-500 ring-opacity-50"
                    src={instructor.image}
                    alt={instructor.name}
                  />
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{instructor.name}</div>
                <p className="text-gray-700 text-base">{instructor.email}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
