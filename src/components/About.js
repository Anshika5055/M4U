import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ab from "../assets/ab.jpg";
// import bd from "../assets/bd.jpg";
// import c from "../assets/c.jpg";
import User from "./User";
import { Component } from "react";
import UserClass from "./UserClass";
// import "./About.css";
import "../../Usercs.css";
class About extends Component {
  render() {
    return (
      <div className="About-m4u">
        <div className="my-custom-carousel">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            transitionTime={100}
            interval={1000}
          >
            <div className="pizza">
              <img
                className="food"
                src="https://res.cloudinary.com/dw6wxize2/image/upload/v1744610528/c_qtsrcc.jpg"
                alt="img1"
              />
            </div>
            <div className="pizza">
              <img
                className="food"
                src="https://res.cloudinary.com/dw6wxize2/image/upload/v1744610527/ab_vsuoux.jpg"
                alt="img2"
              />
            </div>
            <div className="pizza">
              <img
                className="food"
                src="https://res.cloudinary.com/dw6wxize2/image/upload/v1744610527/bd_v8n6qv.jpg"
                alt="img3"
              />
            </div>
          </Carousel>
        </div>

        {/* User Profile Component */}
        {/* <User name={"Anshika Rakheja"} /> */}
        <UserClass name={"Anshika Rakheja"} />

        {/* About Us Content */}
      </div>
    );
  }
}

export default About;
