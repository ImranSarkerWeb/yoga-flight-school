import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
