/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AiOutlineLeft } from "react-icons/ai";
import PrivateRoute from "@/components/PrivateRoute";

const BeerPage = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 15;


  
  

  const fetchItems = useCallback(async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`);
    const data = await response.json();

    if (data.length === 0) {
      setHasMore(false);
    } else {
      setItems((prevItems) => [...prevItems, ...data]);
      setPage(page + 1);
    }
  }, [page]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
  
    <PrivateRoute>
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
        <InfiniteScroll
          dataLength={items.length}
          next={fetchItems}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-black">
            {items.map((item) => (
              
                <div key={item.id} className=" flex flex-col justify-between  h-[400px]  rounded-lg text-white bg-gray-600 mt-10  mx-4 p-4 ">
                  <div>
                    <img
                      className="w-32 mx-auto h-48 border-b-2 border-yellow-500  pb-2"
                      src={item?.image_url}
                      alt=""
                    />
                  </div>
                  <div className=" flex flex-col justify-between">
                    <h1 className=" text-yellow-500 pt-2 font-semibold text-lg">
                      {item?.name}
                    </h1>
                    <p className="">Tag : {item?.tagline}</p>
                    <div className="flex items-center justify-between mt-6">
                      <p className="bg-red-500 p-2 rounded-md">
                        Price: ${item?.srm}
                      </p>
                      <p className="bg-yellow-500 py-2 px-6 rounded-md">
                        {item?.boil_volume.value}
                      </p>
                    </div>
                  </div>
                </div>
              
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
    </PrivateRoute>

  );
};

export default BeerPage;
