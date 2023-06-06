import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/Banner/01.jpg";
import img2 from "../../../assets/Banner/02.jpg";
import img3 from "../../../assets/Banner/03.jpg";
import img4 from "../../../assets/Banner/04.jpg";
import img5 from "../../../assets/Banner/05.jpg";
import img6 from "../../../assets/Banner/06.jpg";
import img7 from "../../../assets/Banner/07.jpeg";
import img8 from "../../../assets/Banner/08.jpg";
import img9 from "../../../assets/Banner/09.jpeg";
import img10 from "../../../assets/Banner/10.jpg";
import img11 from "../../../assets/Banner/11.jpg";
import img12 from "../../../assets/Banner/12.jpg";
import img13 from "../../../assets/Banner/13.jpg";
import img14 from "../../../assets/Banner/14.jpg";
import img15 from "../../../assets/Banner/15.jpg";
import img16 from "../../../assets/Banner/16.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
      <div>
        <img src={img7} />
      </div>
      <div>
        <img src={img8} />
      </div>
      <div>
        <img src={img9} />
      </div>
      <div>
        <img src={img10} />
      </div>
      <div>
        <img src={img11} />
      </div>
      <div>
        <img src={img12} />
      </div>
      <div>
        <img src={img13} />
      </div>
      <div>
        <img src={img14} />
      </div>
      <div>
        <img src={img15} />
      </div>
      <div>
        <img src={img16} />
      </div>
    </Carousel>
  );
};

export default Banner;
