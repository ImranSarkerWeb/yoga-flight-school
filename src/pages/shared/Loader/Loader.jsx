import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="my-12 flex items-center justify-center">
      <Dna
        visible={true}
        height="250"
        width="250"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
