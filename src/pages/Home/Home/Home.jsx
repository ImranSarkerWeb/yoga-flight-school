import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import OurJournal from "../OurJournal/OurJournal";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
      <OurJournal></OurJournal>
    </div>
  );
};

export default Home;
