import React from 'react';
import "./LogosBar.css"

const LogosBar = () => {
  return (
    <>
      <div className="container border border-1 logosb">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 custom-text">
          <div className="flex flex-col justify-center items-center md:items-start ml-12">
            <p className="text-2xl font-bold text-black-500 md:text-left font-sans main">
              FEW OF OUR ESTEEMED
              <span className='brand' style={{ color: "orangered" }}>WORLD-CLASS BRANDS</span>
            </p>
            <p className="text-xl flex justify-center items-center md:text-left text-gray-600 tex">
              Chosen By Leaders Of The Industry
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 ">
            <div className="border-r border-gray-900 hidden md:block bod "></div>
            <div className="img2"></div>
            <div className="img1"> </div>            
            <div className="img3"></div>
            <div className="img4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogosBar;
