import AR from "../assets/AR.mp4";

const Contact = () => {
  return (
    <div className="container">
      {/* Contact Form */}
      <form className="contact-form">
        <fieldset className="cntct">
          <h1 className="CM">Contact Me</h1>
          <label className="blue" htmlFor="name">
            Name:{" "}
          </label>
          <input
            type="text"
            id="name"
            className="ARCONT"
            name="name"
            placeholder="Enter your name"
          />
          <br />
          <br />

          <label className="blue" htmlFor="email">
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="ARCONT"
            placeholder="Enter your email"
          />
          <br />
          <br />

          <label className="blue" htmlFor="message">
            Message:{" "}
          </label>
          <textarea
            id="message"
            name="message"
            className="ARCONT"
            placeholder="Enter your message"
          ></textarea>
          <br />
          <br />

          <button className="frmbtn">Submit</button>
        </fieldset>
      </form>

      {/* Video */}
      <video autoPlay muted loop className="video-bg">
        <source src={AR} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Contact;
