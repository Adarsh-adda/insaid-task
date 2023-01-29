import React, { useEffect } from "react";
import fb from "./../../assets/fb.png";
import insta from "./../../assets/insta.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      style={{ color: "white", padding: "70px", textAlign: "center" }}
      className="container"
      data-aos="fade-left"
    >
      <div className="row">
        <div className="col-md-6">
          <h1>About TechSolutions</h1>
          <div style={{ padding: "15px" }}>
            Offers High Quality and Affordable Website Development, App
            Development, Customized ERP Solutions, CRM Solutions and Digital
            Marketing.
          </div>
        </div>
        <div className="col-md-6" style={{ textAlign: "center" }}>
          <h1>Social media</h1>
          <span style={{ padding: "15px" }}>
            <img src={fb} alt="" style={{ marginRight: "10px" }} />
            <img src={insta} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
