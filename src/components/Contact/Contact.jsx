import React from "react";
import { ImLocation } from "react-icons/im";
import {FaPhone} from "react-icons/fa"
import {AiOutlineClockCircle} from "react-icons/ai"

const Contact = () => {
  return (
    <div id="contact">
      <div className="mt-28 mb-16">
        <div className="text-center">
          <p className="font-medium font-serif text-base  md:text-lg">WHERE TO FIND US</p>
          <h1 className="font-bold font-serif border-b-8 md:w-[500px] w-[300px] mx-auto border-yellow-500 pb-8  mt-2 text-4xl md:text-5xl lg:text-7xl">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-col md:flex-row mx-6  my-16">
          <div className="md:w-1/2 w-full">
            <p className=" text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorpe leo, eget euismod orci cum leo consectetur adipiscing
              elit.
            </p>
            <div className="flex flex-col md:flex-row ">
              <div className="md:w-1/2 w-full">
                <h1 className="font-bold text-lg text-black ml-2 mt-6">Location 1</h1>
                <div className="flex  mt-2 mb-4 ">
                  <ImLocation size={35} color="red"></ImLocation>
                 <p className="ml-6  text-gray-500 text-sm">Prohibition Brewery & Pub 1705 Mariposa St, San Francisco, CA</p>
                </div>
                <div className="flex my-4">
                  <FaPhone size={18} color="red"></FaPhone>
                 <p className="ml-6  text-gray-500 text-sm">Brewery: (123) 456-7890</p>
                </div>
                <div className="flex my-4">
                  <AiOutlineClockCircle size={30} color="red"></AiOutlineClockCircle>
                 <p className="ml-6  text-gray-500 text-sm">Monday-Friday: 11am-10pm Saturday: 11am-12pm</p>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <h1 className="font-bold text-lg text-black ml-2 mt-6">Location 2</h1>
                <div className="flex mt-2 mb-4 ">
                  <ImLocation size={35} color="red"></ImLocation>
                 <p className="ml-6  text-gray-500 text-sm">Prohibition Brewery & Pub 1705 Mariposa St, San Francisco, CA</p>
                </div>
                <div className="flex my-4">
                  <FaPhone size={18} color="red"></FaPhone>
                 <p className="ml-6  text-gray-500 text-sm">Brewery: (123) 456-7890</p>
                </div>
                <div className="flex my-4">
                  <AiOutlineClockCircle size={30} color="red"></AiOutlineClockCircle>
                 <p className="ml-6  text-gray-500 text-sm">Monday-Friday: 11am-10pm Saturday: 11am-12pm</p>
                </div>
              </div>
             
             
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 md:px-10">
            <input className="border p-4 rounded-lg my-4 w-full border-red-400" placeholder="Enter your Name *" type="text" />
            <input className="border p-4  rounded-lg my-4 w-full border-red-400" placeholder="Enter your email *" type="email" />
            <textarea className="border  rounded-lg p-2 border-red-400 w-full" placeholder=" Message *"  rows="5"></textarea>
            <button className="px-12 font-semibold  py-3 text-white mt-8  bg-red-600">SEND</button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
