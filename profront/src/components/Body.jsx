import React, { useRef } from 'react';
import Image from '../Assets/Image.png';
import { ChevronRight } from "../Icons/icons";
import "./Body.css";
import AR from '../Assets/icons/AR.png';
 
const Body = () => {
  return (
    <div className="container mt-5" style={{ marginBottom: "-200px" }}>
      <div className="row">
        <div className="col-lg-6">
          <div className="bg mt-10" style={{ padding: "130px" }}>
            <div className="d-flex flex-column">
              <h1
                className=" font-bold"
                style={{ fontSize: "40px", lineHeight: "1.2" }}
              >
                <h1 className="text-black text1" style={{ marginBottom: "-14px" }}>
                  Creative Solutions
                </h1>
                <h1 className="text-black text2" style={{ marginBottom: "-8px" }}>
                  to get the{" "}
                  <span style={{ color: "orangered" }}>best result</span>
                </h1>
                <h1 className="text-black text3">with our agency</h1>
              </h1>
              <p
                className="mt-2 text-gray-400 flex justify-center items-center font-sans paragraph"
                style={{
                  fontSize: "17px",
                  textAlign: "justify",
                  lineHeight: "1.2",
                }}
              >
                Discover the power of creative solutions with Brandig. From
                digital marketing to design and branding, our team is committed
                to delivering exceptional results that exceed your expectations.
              </p>
            </div>
            <div
              className="d-flex flex-wrap justify-content-start"
              style={{ marginRight: "200px" }}
            >
              <div className="mt-4 d-flex">
                <span style={{ marginRight: "50px" }}>
                  <ChevronRight />
                </span>
                <h6
                  className="text-black font-bold service"
                  style={{ marginLeft: "-50px", fontSize: "17px" }}>
                  Explore Our Services
                </h6>
              </div>
              <button className='text-dark flex border ml-8 mt-8 rounded-full p-1 touch-btn' style={{marginRight:"-250px", marginTop:"20px", backgroundColor:"orangered"}}>
                  <img
                    src={AR}
                    alt="AR"
                    style={{ filter: "invert(100%)", marginTop:"2px" }}
                    height={"20px"}
                    width={"18px"}
                    className="ml-2 AR"/>
                    <p className='flex justify-center get' style={{fontSize:"14px", marginLeft:"8px", color:"white"}}>Get In Touch</p>
                </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6" style={{ marginLeft: "" }}>
          <img
            src={Image}
            alt="Creative Solutions"
            className="img-fluid image"
            style={{ maxWidth: "auto", height: "100vh" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;


 
