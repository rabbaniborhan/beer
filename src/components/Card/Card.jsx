import Image from "next/image";
import img1 from "../../../public/card.jpg";
import img2 from "../../../public/card2.jpg";
import img3 from "../../../public/card3.jpg";

const Card = () => {
  return (
    <div className="my-16 mx-4">
      <div>
        <div className="text-center">
          <p className="font-medium font-serif text-lg">DISCOVER MENU</p>
          <h1 className="font-bold font-serif border-b-8 md:w-[400px] lg:w-[500px] mx-auto border-yellow-500 pb-8  mt-2 md:text-5xl text-4xl  lg:text-7xl">Weekly Deals</h1>
        </div>
        <div className="flex flex-col md:flex-row mt-16 items-center justify-between">
          <div className="mt-20 md:mt-4">
            <Image src={img1} alt=""></Image>
            <h1 className="text-center font-serif font-semibold text-xl">Buffalo Wings</h1>
            <p className="font-normal text-center mt-3 text-gray-500">Black-eyed peas and black beans.</p>
            <p className="font-bold text-red-600 text-lg text-center mt-4">$5.99</p>
          </div>
          <div className="mt-20 md:mt-4">
            <Image src={img2} alt=""></Image>
            <h1 className="text-center font-serif font-semibold text-xl">Texas Caviar</h1>
            <p className="font-normal text-center mt-3 text-gray-500">Black-eyed peas and black beans.</p>
            <p className="font-bold text-red-600 text-lg text-center mt-4">$6.99</p>
          </div>
          <div className="mt-20 md:mt-4">
            <Image src={img3} alt=""></Image>
            <h1 className="text-center font-serif font-semibold text-xl">Prime Rib Steak</h1>
            <p className="font-normal text-center mt-3 text-gray-500">Black-eyed peas and black beans.</p>
            <p className="font-bold text-red-600 text-lg text-center mt-4">$8.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
