import Image from "next/image";
import React from "react";
import img from "../../../public/about.jpg";
import img1 from "../../../public/ingrediants.png";
import img2 from "../../../public/process.png";
import img3 from "../../../public/cup.png";
import img4 from "../../../public/store.png";

const About = () => {
  return (
    <div id="about" className="my-24">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full">
          <Image alt="img" src={img}></Image>
        </div>
        <div className="lg:w-1/2 w-full m-8 md:mr-10">
          <div className="ml-2">
            <p className="font-semibold font-serif">FAVORITE CITY PUB</p>
            <h1 className="font-bold mb-4 text-5xl md:text-7xl font-serif"> About Us</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="m-4">
              <div className="flex">
                <Image src={img1} alt="" />
                <p className="ml-4 font-bold text-xl">Our process</p>
              </div>
              <p className="text-gray-500 mt-4 ml-2 font-extralight w-full md:w-44">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews, iterative approaches.
              </p>
            </div>
            <div className="m-4">
              <div className="flex">
                <Image src={img2} alt="" />
                <p className="ml-4 font-bold text-xl">Our process</p>
              </div>
              <p className="text-gray-500 mt-4 ml-2 font-extralight w-full md:w-44">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews, iterative approaches.
              </p>
            </div>
            <div className="m-4">
              <div className="flex">
                <Image src={img3} alt="" />
                <p className="ml-4 font-bold text-xl">Farming practices</p>
              </div>
              <p className="text-gray-500 mt-4 ml-2 font-extralight w-full md:w-44">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews, iterative approaches.
              </p>
            </div>
            <div className="m-4">
              <div className="flex">
                <Image src={img4} alt="" />
                <p className="ml-4 font-bold text-xl">Story behind</p>
              </div>
              <p className="text-gray-500 mt-4 ml-2 font-extralight w-full md:w-44">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews, iterative approaches.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
