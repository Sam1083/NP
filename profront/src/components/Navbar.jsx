import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png';
import { ChevronDown } from '../Icons/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="" style={{ backgroundColor: "rgb(247, 229, 223)"}}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <div className="flex items-center logo ">
            <Link className="mr-4 hidden sm:flex" to="/">
              <img src={Logo} alt="Logo" style={{ height: "65px", width: "auto" }} className="mx-2" />
            </Link>
          </div>

          <div className="relative">
            <button
              className="focus:outline-none lg:hidden"
              onClick={toggleNavbar}>
              <svg
                className="h-6 w-6 fill-current mt-3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={isOpen ? 'M0 0h20v2H0V0zm0 7h20v2H0V7zm0 7h20v2H0v-2z' : 'M4 6h16V5H4v1zm0 6h16v-1H4v1zm0 6h16v-1H4v1z'}
                />
              </svg>
            </button>

            <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'} lg:w-auto lg:absolute lg:right-0 lg:top-16 lg:bg-oragne-200 mb-12 lg:w-full lg:mt-0 lg:relative lg:flex lg:justify-end lg:gap-5 lg:px-4`} style={{marginBottom:""}}>
              <ul className="lg:flex lg:items-center contents gap-3" style={{marginTop:"-5rem"}}>
                <li className="mr-4">
                  <Link className="text-orangered font-semibold" to="/" style={{color:"orangered"}}>Home</Link>
                </li>
                <li className="mr-4 flex items-center gap-1">
                  <Link className="text-dark font-semibold" to="/solutions">
                    Solutions</Link><span><ChevronDown/></span> 
                </li>
                <li className="mr-4">
                  <Link className="text-dark font-semibold" to="/pages">Pages</Link>
                </li>
                <li className="mr-4 flex items-center gap-1">
                  <Link className="text-dark font-semibold" to="/about">
                    About Us</Link><span><ChevronDown/></span> 
                </li>
                <li className="mr-4">
                  <Link className="text-dark font-semibold" to="/blog">Blog</Link>
                </li>
                <li className="mr-4">
                  <Link className="text-dark font-semibold" to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link className="text-white rounded-md" to="/">
                    <button className='rounded-full p-1 font-bold' style={{ backgroundColor: "orangered", fontSize:"11px"}}> Get Free Quote</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
