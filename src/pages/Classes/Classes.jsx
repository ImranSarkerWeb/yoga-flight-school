import { useLoaderData } from "react-router-dom";
import ClassCard from "./ClassCard";

const Classes = () => {
  const classes = useLoaderData();

  return (
    <div className="my-12 grid  gap-3 md:grid-cols-3 ">
      {classes.map((classItem) => (
        <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
      ))}
    </div>
  );
};

export default Classes;
