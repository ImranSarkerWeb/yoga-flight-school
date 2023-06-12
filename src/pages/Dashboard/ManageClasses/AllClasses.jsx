import { useLoaderData } from "react-router-dom";
import ClassCard from "./ClassCard";

const AllClasses = () => {
  const classes = useLoaderData();

  return (
    <div className="my-12 grid  gap-6 md:grid-cols-2 ">
      {classes.map((classItem) => (
        <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
      ))}
    </div>
  );
};

export default AllClasses;
