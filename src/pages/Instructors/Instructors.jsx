import { useLoaderData } from "react-router-dom";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const instructors = useLoaderData();
  return (
    <div className="my-12">
      <h1 className="text-center my-12 text-3xl font-semibold">
        {" "}
        Our Experts Instructors
      </h1>
      <div className="grid gap-4 md:grid-cols-3">
        {instructors &&
          instructors.map((instructor) => (
            <InstructorCard
              key={instructor._id}
              instructor={instructor}
            ></InstructorCard>
          ))}
      </div>
    </div>
  );
};

export default Instructors;
