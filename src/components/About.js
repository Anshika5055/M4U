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
        <Carousel showThumbs={false} infiniteLoop autoPlay transitionTime={200}>
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
      <div className="About-content">
        <h1 className="AC">About Us</h1>
        <p className="AD">
          Welcome to M4U (Meals 4 You)—where hunger meets its match! 🍔🍕 We’re
          here to satisfy your cravings with a wide range of mouthwatering
          meals, delivered fast and fresh to your doorstep. Because let’s be
          honest, cooking is overrated! Whether it’s a quick bite, a comfort
          meal, or a feast with friends, we’ve got something for everyone. With
          a seamless ordering process and lightning-fast delivery, great food is
          just a tap away. So why wait? Order now and let the feast begin!
        </p>
      </div>
    </div>
  );
};

export default About;
