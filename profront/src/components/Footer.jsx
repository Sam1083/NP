import React from 'react'
import "./Footer.css"
import IC1 from '../Assets/icons/IC1.png';
import IC2 from '../Assets/icons/IC2.png';
import IC3 from '../Assets/icons/IC3.png';
import IC4 from '../Assets/icons/IC4.png';
import IC5 from '../Assets/icons/IC5.png';
import IC6 from '../Assets/icons/IC6.png';



const Footer = () => {
  return (
    <div
      className="border border-1 bg-black py-12"
      style={{ height: "auto", width: "auto" }}>
      <div className="container mx-auto text-center mt-12">
        <p
          className="text-4xl font-bold text-orangered foot1"
          style={{ color: "orangered" }}>
          OUR AGENCY'S DIGITAL SERVICES
        </p>
        <p className="mt-6 text-white text-6xl font-bold foot2">
          Our Most Popular Services
        </p>
        <p className="text-white text-3xl mt-6 foot3">
          Our service range fits together cohesively, so we can provide
          end-to-end service, from Startup to Scaleup.
        </p>
      </div>
      <div className="container mt-12">
        <div className="container-fluid flex flex-wrap gap-3 custom-boxes">
          <div
            className="box1 border border-2 rounded-4 border-black"
            style={{
              backgroundColor: "rgb(22, 21, 21)",
              height: "600px",
              width: "400px",
            }}>
            <img
              src={IC1}
              alt="IC1"
              style={{ filter: "invert(100%)", color: "white", marginTop:"12px", marginBottom:"-40px" }}
              height={"150px"}
              width={"100px"}
              className="ml-3"/>

            <h1 className="text-white font-bold text-xl ml-4 mb-5" style={{marginTop:"80px"}}>
              Branding
            </h1>
            <div className="flex flex-col items-center justify-center mb-12">
              <p className="text-white ml-4 para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                aliquid molestiae error debitis laborum fugit ipsum inventore.
                Quod, sit incidunt totam ipsa ex voluptate laboriosam quibusdam
                iure odio inventore quasi?
              </p>
            </div>
            <button className="text-white border rounded-5 px-4 py-2 ml-12">
              Learn More
            </button>
          </div>

          <div
            className="box2 border border-2 rounded-4 border-black"
            style={{
              backgroundColor: "rgb(22, 21, 21)",
              height: "600px",
              width: "400px",
            }}
          >
            <img
              src={IC2}
              alt="IC2"
              style={{ filter: "invert(100%)" }}
              height={"100px"}
              width={"100px"}
              className="ml-4"/>
            <h1 className="text-white font-bold text-xl ml-4 mt-12 mb-5">
              Web Design
            </h1>
            <div className="flex flex-col items-center justify-center mb-12">
              <p className="text-white ml-4 para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                aliquid molestiae error debitis laborum fugit ipsum inventore.
                Quod, sit incidunt totam ipsa ex voluptate laboriosam quibusdam
                iure odio inventore quasi?
              </p>
            </div>
            <button className="text-white border rounded-5 px-4 py-2 ml-12">
              Learn More
            </button>
          </div>

          <div
            className="box3 border border-2 rounded-4 border-black"
            style={{
              backgroundColor: "rgb(22, 21, 21)",
              height: "600px",
              width: "400px",
            }}>
            <img
              src={IC3}
              alt="IC3"
              style={{ filter: "invert(100%)" }}
              height={"100px"}
              width={"100px"}
              className="ml-4 mt-2"/>
            <h1 className="text-white font-bold text-xl ml-4 mt-12 mb-5">
              Digital Marketing
            </h1>
            <div className="flex flex-col items-center justify-center mb-12">
              <p className="text-white ml-4 para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                aliquid molestiae error debitis laborum fugit ipsum inventore.
                Quod, sit incidunt totam ipsa ex voluptate laboriosam quibusdam
                iure odio inventore quasi?
              </p>
            </div>
            <button className="text-white border rounded-5 px-4 py-2 ml-12">
              Learn More
            </button>
          </div>

          <div
            className="box4 border border-2 rounded-4 border-black"
            style={{
              backgroundColor: "rgb(22, 21, 21)",
              height: "600px",
              width: "400px",
            }}>
            <img
              src={IC4}
              alt="IC4"
              style={{ filter: "invert(100%)" }}
              height={"100px"}
              width={"100px"}
              className="ml-4 mt-3"/>
            <h1 className="text-white font-bold text-xl ml-4 mt-12 mb-5">
              SEO
            </h1>
            <div className="flex flex-col items-center justify-center mb-12">
              <p className="text-white ml-4 para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                aliquid molestiae error debitis laborum fugit ipsum inventore.
                Quod, sit incidunt totam ipsa ex voluptate laboriosam quibusdam
                iure odio inventore quasi?
              </p>
            </div>
            <button className="text-white border rounded-5 px-4 py-2 ml-12">
              Learn More
            </button>
          </div>

          <div
            className="box5 border border-2 rounded-4 border-black"
            style={{
              backgroundColor: "rgb(22, 21, 21)",
              height: "600px",
              width: "400px",
            }}>
            <img
              src={IC5}
              alt="IC5"
              style={{ filter: "invert(100%)" }}
              height={"100px"}
              width={"100px"}
              className="ml-4 mt-3"/>

            <h1 className="text-white font-bold text-xl ml-4 mt-12 mb-5">
              Social Media
            </h1>
            <div className="flex flex-col items-center justify-center mb-12">
              <p className="text-white ml-4 para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                aliquid molestiae error debitis laborum fugit ipsum inventore.
                Quod, sit incidunt totam ipsa ex voluptate laboriosam quibusdam
                iure odio inventore quasi?
              </p>
            </div>
            <button className="text-white border rounded-5 px-4 py-2 ml-12">
              Learn More
            </button>
          </div>

          <div
            className="box6 border border-2 rounded-4 border-black"
            style={{
              backgroundColor: "rgb(22, 21, 21)",
              height: "600px",
              width: "400px",
            }}>
            <img
              src={IC6}
              alt="IC6"              
              height={"100px"}
              width={"100px"}
              className="ml-4 mt-3"/>
            <h1 className="text-white font-bold text-xl ml-4 mt-12 mb-5">
              Pitch Deck Design
            </h1>
            <div className="flex flex-col items-center justify-center mb-12">
              <p className="text-white ml-4 para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                aliquid molestiae error debitis laborum fugit ipsum inventore.
                Quod, sit incidunt totam ipsa ex voluptate laboriosam quibusdam
                iure odio inventore quasi?
              </p>
            </div>
            <button className="text-white border rounded-5 px-4 py-2 ml-12">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer