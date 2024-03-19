import React from 'react';
import "./MoreServices.css"


const MoreServices = () => {
  return (
    

    <div className="container px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex justify-center items-center mt-9">
        <p className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl text-center font-bold extra">
          Think We’re Done & Dusted?
        </p>
        <span
          className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl text-center font-bold ml-3 extra"
          style={{ color: "orangered" }}
        >
          We Build Long-Lasting Relationships
        </span>
      </div>
      <p
        className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl text-center font-bold extra"
        style={{ color: "orangered" }}
      >
        That Don’t Stop at Project Delivery
      </p>
      <div className="flex justify-center gap-4 mt-4 mb-12">
        <button className="hbtn rounded-full border-2 border-orange-500 text-xl font-bold p-2">
          Explore Our Services
        </button>
        <button className="hbtn1 rounded-full border-2 border-orange-500 text-xl font-bold px-4 py-2">
          Let's Talk
        </button>
      </div>
    </div>
  );
}

export default MoreServices;
