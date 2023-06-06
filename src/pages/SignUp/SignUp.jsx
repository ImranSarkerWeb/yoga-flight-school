import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true, maxLength: 50 })}
                aria-invalid={errors.name ? "true" : "false"}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <p role="alert">First name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                required
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("mail", { required: "Email Address is required" })}
                aria-invalid={errors.mail ? "true" : "false"}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.mail && (
                <p role="alert" className="text-red-500">
                  {errors.mail?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  pattern: /^[A-Za-z]+$/i,
                  required: true,
                  maxLength: 31,
                })}
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Password is required
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                value={"Sign Up"}
                type="submit"
              />
              {/* <button>Sign Up</button> */}
            </div>
          </form>
          <p className="text-center mb-4">
            <small>
              Already have an account?{" "}
              <Link className="text-blue-400 " to="../login">
                Login.
              </Link>
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
