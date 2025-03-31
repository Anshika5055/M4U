import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ab from "../assets/ab.jpg";
import bd from "../assets/bd.jpg";
import c from "../assets/c.jpg";
import User from "./User";
import { Component } from "react";
import UserClass from "./UserClass";
class About extends Component {
  render() {
    return (
      <div className="About-m4u">
        {/* Carousel Section */}
        <div className="my-custom-carousel">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            transitionTime={150}
            interval={1500}
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
        <User name={"Anshika Rakheja"} />
        <UserClass name={"Anshika Rakheja"} />
      </div>
    );
  }
}

export default About;
