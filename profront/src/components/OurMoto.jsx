import React from "react";
import T1 from "../Assets/T1.png";
import T2 from "../Assets/T2.png";
import T3 from "../Assets/T3.png";
import "./OurMoto.css"


const Body = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex justify-center items-center ml-12">
        <div className="col-span-1 lg:col-span-1 bg-white mb-3 rounded-lg">
          <span >
            <img src={T1} alt="" className="lg1"  />
          </span>
          <h1 className="text-black text-3xl font-bold heads1">
            We build brands that
          </h1>
          <h1 className="text-3xl font-bold heads2" style={{color:"orangered"}}>
            shine and motivate.
          </h1>
          <p className="font-sans text-gray-500 para1" style={{ textAlign: "justify" }}>
            Be prepared to be impressed. Our team of creatives can work with you
            to establish your brand's visual identity, positioning, messaging,
            and voice, regardless of whether you're starting from scratch or
            undergoing a rebrand
          </p>
        </div>
        <div className="col-span-1 lg:col-span-1 bg-white p- rounded-lg">
          <span className="motive1">
            <img src={T2} alt="" className="motive t1 space1" />
          </span>
          <h1 className="text-black text-3xl font-bold heads1">
            We utilize our special
          </h1>
          <h1 className="text-3xl font-bold heads2" style={{color:"orangered"}}>
            blend to execute them.
          </h1>
          <p className="font-sans text-gray-500 para1" style={{ textAlign: "justify" }}>
            Strap on your safety gear. We'll devote ourselves to im- plementing
            your brand's visual identity & messaging through striking web
            design, full-fledged social media management, captivating content
            creation & additional offerings.
          </p>
        </div>
        
        <div className="col-span-1 lg:col-span-1 bg-white p- rounded-lg "  style={{marginTop:'-30px'}}>
          <span className="motive1">
            <img src={T3} alt="" className="motive mt-12" />
          </span>
          <h1 className="text-black text-3xl font-bold head1">
            And we facilitate their
          </h1>
          <h1 className="text-3xl font-bold head2" style={{color:"orangered"}}>
            grow to skyrocket.
          </h1>
          <p className="font-sans text-gray-500 para11" style={{ textAlign: "justify" }}>
            It's time to fasten your seatbelts. We'll team up with you to devise
            a personalized, unstoppable growth market- ing apparatus using SEO,
            social media, email, paid ads, and any other relevant channels.
            Brace yourself for growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
