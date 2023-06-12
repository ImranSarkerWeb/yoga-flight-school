const OurJournal = () => {
  return (
    <div className="mt-36 mb-20">
      <div className="text-center ">
        <h2 className="text-center mb-12 text-3xl md:text-5xl font-bold">
          {" "}
          Our Journal
        </h2>
        <p>
          Stay up to date with Sean & The Yoga Flight Family with our journal
        </p>
      </div>
      <div className=" my-12">
        <div className=" flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="form-control">
            <input
              required
              type="text"
              placeholder="First Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              required
              type="text"
              placeholder="Last Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <button className="btn btn-info">Submit</button>
          </div>
        </div>
      </div>
      <p className="text-center">
        {" "}
        <small>We respect your privacy. Be Blessed.</small>{" "}
      </p>
    </div>
  );
};

export default OurJournal;
