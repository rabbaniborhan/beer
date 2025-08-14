/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { beers } from "@/data/BeerData";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";

const BeerPage = () => {
  // const [items, setItems] = useState([]);
  // const [hasMore, setHasMore] = useState(true);
  // const [page, setPage] = useState(1);
  // const limit = 15;

  // const fetchItems = useCallback(async () => {
  //   const response = await fetch(
  //     `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`
  //   );
  //   const data = await response.json();

  //   if (data.length === 0) {
  //     setHasMore(false);
  //   } else {
  //     setItems((prevItems) => [...prevItems, ...data]);
  //     setPage(page + 1);
  //   }
  // }, [page]);

  // useEffect(() => {
  //   fetchItems();
  // }, [fetchItems]);

  return (
    <div>
      <div className="beer h-72 pt-16">
        <div className="h-full flex flex-col justify-center bg-black opacity-60">
          <p className="text-yellow-400 font-semibold text-lg flex items-center ml-20">
            <Link className="px-2 hover:border-b-2 border-yellow-400 " href="/">
              Home
            </Link>{" "}
            <AiOutlineLeft></AiOutlineLeft>{" "}
            <span className="px-2 border-b-2 border-yellow-400">Beer</span>
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-black">
          {beers.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col   h-[370px]  rounded-lg text-white bg-[#0e0e0e] mt-10  mx-4 p-4 "
            >
              <div>
                <img
                  className="w-32 mx-auto h-48 border-b-2 border-yellow-500  pb-2"
                  src={item?.image}
                  alt=""
                />
              </div>
              <div className=" flex flex-col justify-between">
                <h1 className=" text-yellow-500 pt-1 font-semibold text-lg">
                  {item?.name}
                </h1>
                <p className="">Tag : {item?.tagline}</p>
                <div className="flex items-center justify-between mt-6">
                  <p className="bg-red-500 p-2 rounded-md">
                    Price: ${item?.price}
                  </p>
                  <p className="bg-yellow-500 py-2 px-6 rounded-md">
                    {item?.boil_volume}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeerPage;
