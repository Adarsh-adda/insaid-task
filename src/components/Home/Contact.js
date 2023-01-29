import React, { useEffect } from "react";
import contact from "./../../assets/contactus.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-left"
      style={{ color: "white", textAlign: "center", marginTop: "25px" }}
      className="container"
    >
      <img src={contact} alt="" style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default Contact;
