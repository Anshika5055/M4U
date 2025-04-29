import React from "react";
import "./UserClass.css";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Anshika",
        location: "India",
        bio: "",
        followers: 2,
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/Anshika5055");
      const json = await data.json();
      this.setState({ userInfo: json });
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  render() {
    const { name, location, bio, followers } = this.state.userInfo;

    return (
      <div className="outer">
        <div className="container-arc">
          <div className="left-column-arc">
            <img
              src="https://res.cloudinary.com/dw6wxize2/image/upload/v1744617532/Imageuarcute_bqffnx.png"
              alt="Logo"
              className="profile-image-arc"
            />
            <h2 className="name-arc">
              <b>{name}</b>
            </h2>
            <div className="info">
              <p className="Left_follower">
                <strong>Followers:</strong>
                {followers}K{" "}
              </p>{" "}
              <p className="Right_contacts">
                <strong>Contact:</strong> @anshikarakheja1
              </p>
            </div>
          </div>

          <div className="right-column-arc">
            <div className="about-section-arc">
              <h2>Our Mission</h2>
              <p>
                We’re here to redefine how people discover and enjoy food.
                Whether it's your favorite comfort dish or an adventurous new
                cuisine, we aim to make it just a few clicks away — quick,
                reliable, and tasty.
              </p>
            </div>

            <div className="about-section-arc">
              <h2>Why Choose Us?</h2>
              <ul>
                <li>
                  🍽️{" "}
                  <span className="li-content">
                    Curated list of top-rated restaurants
                  </span>{" "}
                </li>
                <li>
                  🚚{" "}
                  <span className="li-content">
                    Lightning-fast and reliable delivery
                  </span>{" "}
                </li>
                <li>
                  🔐{" "}
                  <span className="li-content">
                    Secure and simple ordering experience
                  </span>{" "}
                </li>
                <li>
                  🤝{" "}
                  <span className="li-content">
                    Friendly support whenever you need us
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="about-section-teamarc">
            <h2>Our Team</h2>
            <p>
              We’re a passionate crew of food-lovers, tech geeks, and creative
              thinkers. Our goal? To create an experience that makes every meal
              feel magical.
            </p>
          </div>
          <div className="left-column-arc">
            <img
              src="https://res.cloudinary.com/dw6wxize2/image/upload/v1744628336/sooqtar2_jn5wl1.png"
              alt="Member 1"
              className="profile-image-arc"
            />
            <div className="name-arc">Anshika</div>
            <div className="tagline-arc">Frontend Developer</div>
          </div>

          <div className="bottom_right-column-arc">
            <img
              src="https://res.cloudinary.com/dw6wxize2/image/upload/v1744626206/muskan_szo2n8.jpg"
              alt="Member 2"
              className="rprofile-image-arc"
            />
            <div className="rname-arc">Muskan</div>
            <div className="rtagline-arc">Backend Developer</div>
          </div>
          <div className="about-footer-arc">
            <p className="footer-arc">
              © {new Date().getFullYear()} M4U-Meals4U. Crafted with ❤️ by
              Anshika and Muskan
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
