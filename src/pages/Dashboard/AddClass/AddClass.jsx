import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
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
        {errors.className && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="classImage" className=" font-medium mb-1">
          Class Image
        </label>
        <input
          {...register("classImage", { required: true })}
          id="classImage"
          className="input input-bordered input-success w-full max-w-xs"
        />
        {errors.className && (
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
