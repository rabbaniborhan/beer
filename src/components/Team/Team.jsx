import Image from "next/image";
import React from "react";
import { AiOutlineTwitter ,AiOutlineInstagram,AiOutlineGooglePlus} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import img from "../../../public/man.jpg";
import img2 from "../../../public/man2.jpg";
import img3 from "../../../public/man3.jpg";

const Team = () => {
  return (
    <div className="my-20">
      {/* <div className="text-center">
        <p className="font-medium font-serif text-lg">OUR TALENTED PEOPLE</p>
        <h1 className="font-bold font-serif border-b-8 lg:w-[600px] mx-auto border-yellow-500 pb-8  mt-2 text-7xl">
          Meet Our Team
        </h1>
      </div> */}
      <div className="mt-24 flex flex-col md:flex-row items-center justify-around">
        <div className="flex mt-14 md:mt-4 md:w-[250px] lg:w-[330px] xl:w-[480px]   flex-col items-center ">
          <Image src={img} alt=""></Image>
          <p className="font-semibold font-serif text-xl mt-8">Amanda Snyder</p>
          <p className="text-gray-400">Manager</p>
          <div className="flex items-center mt-8 justify-between">
            <span className="p-2 bg-red-600 mr-5 text-white rounded-full"><AiOutlineTwitter size={25}></AiOutlineTwitter></span>
            <span className="p-2 bg-red-600 mr-5 text-white rounded-full"><BiLogoFacebook size={25}></BiLogoFacebook></span>
            <span className="p-2 bg-red-600 mr-5 text-white rounded-full"><AiOutlineInstagram size={25}></AiOutlineInstagram></span>
            <span className="p-2 bg-red-600  text-white rounded-full"><AiOutlineGooglePlus size={25}></AiOutlineGooglePlus></span>
          </div>
        </div>
        <div className="flex mt-14 md:mt-4 md:w-[250px] lg:w-[330px] xl:w-[480px]   flex-col items-center ">
          <Image src={img2} alt=""></Image>
          <p className="font-semibold font-serif text-xl mt-8">Amanda Snyder</p>
          <p className="text-gray-400">Manager</p>
          <div className="flex items-center mt-8 justify-between">
            <span className="p-2 bg-red-600 mr-5 text-white rounded-full"><AiOutlineTwitter size={25}></AiOutlineTwitter></span>
            <span className="p-2 bg-red-600 mr-5 text-white rounded-full"><BiLogoFacebook size={25}></BiLogoFacebook></span>
            <span className="p-2 bg-red-600 mr-5 text-white rounded-full"><AiOutlineInstagram size={25}></AiOutlineInstagram></span>
            <span className="p-2 bg-red-600  text-white rounded-full"><AiOutlineGooglePlus size={25}></AiOutlineGooglePlus></span>
          </div>
        </div>
        <div className="flex mt-14 md:mt-4 md:w-[250px] lg:w-[330px] xl:w-[480px]  flex-col items-center ">
          <Image src={img3} alt=""></Image>
          <p className="font-semibold font-serif text-xl mt-8">Amanda Snyder</p>
          <p className="text-gray-400">Manager</p>
          <div className="flex items-center mt-8 justify-between">
            <span className="p-2 bg-red-600 mr-5 text-white rounded-full"><AiOutlineTwitter size={25}></AiOutlineTwitter></span>
            <span className="p-2 bg-red-600 mr-5 text-white rounded-full"><BiLogoFacebook size={25}></BiLogoFacebook></span>
            <span className="p-2 bg-red-600 mr-5 text-white rounded-full"><AiOutlineInstagram size={25}></AiOutlineInstagram></span>
            <span className="p-2 bg-red-600  text-white rounded-full"><AiOutlineGooglePlus size={25}></AiOutlineGooglePlus></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
