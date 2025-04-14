import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Anshika5055");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, location, follower_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count :{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increase count
        </button> */}
        {/* <img src="https://ibb.co/0R816MLr" /> */}
        <h1>{follower_url}</h1>
        <h2>{name}</h2>
        <h3>{location}</h3>

        <h4>Contact: @anshikarakheja1</h4>
        <div className="about-content">
          <p className="about-tagline">
            Bringing good food to your doorstep – fast, fresh, and fabulous.
          </p>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              We’re here to redefine how people discover and enjoy food. Whether
              it's your favorite comfort dish or an adventurous new cuisine, we
              aim to make it just a few clicks away — quick, reliable, and
              tasty.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>🍽️ Curated list of top-rated restaurants</li>
              <li>🚚 Lightning-fast and reliable delivery</li>
              <li>🔐 Secure and simple ordering experience</li>
              <li>🤝 Friendly support whenever you need us</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <p>
              We’re a passionate crew of food-lovers, tech geeks, and creative
              thinkers. Our goal? To create an experience that makes every meal
              feel magical.
            </p>
          </div>

          <div className="about-footer">
            <p>© {new Date().getFullYear()} FoodExpress. Crafted with ❤️</p>
          </div>
        </div>
      </div>
    );
  }
}
export default UserClass;
