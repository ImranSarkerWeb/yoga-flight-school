import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [enrolled, setEnrolled] = useState([]);
  const allClass = useLoaderData();
  console.log(allClass);

  let enrolledId = [];

  useEffect(() => {
    fetch(`https://yoga-flight-server.vercel.app/enrolled/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEnrolled(data);
      });
  }, [user]);
  enrolled.map((item) => {
    enrolledId.push(...item.courseItems);
  });

  const enrolledCourses = enrolledId.map((id) => {
    return allClass.find((course) => course._id === id);
  });

  console.log(enrolledCourses);
  return (
    <div className="w-[80%] mx-auto">
      <div className=" font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Items: {enrolledCourses.length}</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Course</th>
              <th>Course Name</th>
              <th className="text-right">Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  {" "}
                  <span>Enrolled</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
