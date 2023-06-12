import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_API;

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.courseImage[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            courseName,
            price,
            availableSeats,
            instructorEmail,
            instructorName,
          } = data;
          const newClass = {
            name: courseName,
            price: parseFloat(price),
            availableSeats: parseInt(availableSeats),
            totalSeats: parseInt(availableSeats),
            enrolled: 0,
            instructorEmail,
            instructorName,
            status: "Pending",
            image: imgURL,
          };

          axiosSecure.post("/classes", newClass).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="courseName" className=" font-medium mb-1">
          Class Name
        </label>
        <input
          {...register("courseName", { required: true })}
          id="courseName"
          className="input input-bordered input-success w-full max-w-xs"
        />
        {errors.courseName && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="form-control w-full my-4">
        <label className="label" htmlFor="courseImage">
          <span className=" font-medium mb-1">Class Image</span>
        </label>
        <input
          id="courseImage"
          type="file"
          {...register("courseImage", { required: true })}
          className="file-input file-input-bordered input-success w-full max-w-xs "
        />
        {errors.courseImage && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="instructorName" className=" font-medium mb-1">
          Instructor Name
        </label>
        <input
          defaultValue={user.displayName}
          {...register("instructorName")}
          id="instructorName"
          className="input input-bordered input-success w-full max-w-xs"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label htmlFor="instructorEmail" className=" font-medium mb-1">
          Instructor Email
        </label>
        <input
          defaultValue={user.email}
          {...register("instructorEmail")}
          id="instructorEmail"
          className="input input-bordered input-success w-full max-w-xs"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label htmlFor="availableSeats" className=" font-medium mb-1">
          Available Seats
        </label>
        <input
          {...register("availableSeats", { required: true })}
          id="availableSeats"
          className="input input-bordered input-success w-full max-w-xs "
          type="number"
        />
        {errors.availableSeats && (
          <p className="text-red-500 ">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="price" className=" font-medium mb-1">
          Price
        </label>
        <input
          {...register("price", { required: true })}
          id="price"
          className="input input-bordered input-success w-full max-w-xs"
          type="number"
          step="0.01"
        />
        {errors.price && <p className="text-red-500">This field is required</p>}
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Add
      </button>
    </form>
  );
};

export default AddClass;
