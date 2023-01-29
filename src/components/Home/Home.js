import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import web2 from "./../../assets/web-design2.png";
import service1 from "./../../assets/service1.png";
import service2 from "./../../assets/service2.png";
import service3 from "./../../assets/service3.png";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="home-container container" style={{ color: "white" }}>
        <div className="row">
          <div
            className="col-md-6 "
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            style={{
              alignSelf: "center",
              fontSize: "25px",
              textAlign: "center",
              marginTop: "35px",
            }}
          >
            Get The Best Design For Your Websites which is visually appealing,
            easy to navigate, and provides a great user experience.
          </div>
          <div
            className="col-md-6"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            style={{ textAlign: "center" }}
          >
            <img src={web2} alt="" style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
      </div>

      <div
        className="container"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        style={{ color: "white", textAlign: "center", marginTop: "30px" }}
      >
        <h1>Our Services</h1>
        <div className="row service-container">
          <div className="col-md-4">
            <img src={service1} alt="" />
            <div>Web Development</div>
            <div style={{ padding: "15px" }}>
              {" "}
              This service involves coding the website using languages such as
              HTML, CSS, and JavaScript. It also includes creating interactive
              elements such as forms, e-commerce functionality, and other
              dynamic features.
            </div>
          </div>
          <div className="col-md-4">
            <img src={service2} alt="" />
            <div>Content Creation</div>
            <div style={{ padding: "15px" }}>
              This service includes writing and editing website content, such as
              text, images, and videos. It also includes creating a sitemap,
              navigation, and other components that help users find what they
              need.
            </div>
          </div>
          <div className="col-md-4">
            <img src={service3} alt="" />
            <div>Website Maintenance</div>
            <div style={{ padding: "15px" }}>
              This service includes ongoing updates, backups, security, and
              performance optimization to keep the website running smoothly.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
