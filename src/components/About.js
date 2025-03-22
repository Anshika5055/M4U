import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ab from "../assets/ab.jpg";
import bd from "../assets/bd.jpg";
import c from "../assets/c.jpg";

const About = () => {
  return (
    <div className="About-m4u">
      {/* Carousel Section */}
      <div className="my-custom-carousel">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          transitionTime={100}
          interval={500}
        >
          <div className="pizza">
            <img className="food" src={ab} alt="img1" />
          </div>
          <div className="pizza">
            <img className="food" src={bd} alt="img2" />
          </div>
          <div className="pizza">
            <img className="food" src={c} alt="img3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
