import React, { useEffect, useState } from "react";
import Navbar from '../Nabrar/Navbar'
import Footer from '../../Page/Footer'

import { Link } from "react-router-dom";
import { Flex, Rate } from "antd";

const AllProducts = () => {
    const [value, setValue] = useState(3);
    const [getAllProduct, setgetAllProduct] = useState([]);
    const lodingproduct = async () => {
      const res = await fetch("http://localhost:5001/api/v1/product/", {
        method: "GET",
      });
      const data = await res.json();
      setgetAllProduct(data);
    };
  
    const [subcategory, setsubcategory] = useState([]);
    const getIdCategry = async (id) => {
      const res = await fetch("http://localhost:5001/api/v1/subcategry/" + id, {
        method: "GET",
      });
      const data = await res.json();
  
      setsubcategory(data);
    };
  
  
    useEffect(() => {
        lodingproduct();
      }, []);
  return (
    <>
    <Navbar/>


       <main className=" flex flex-wrap justify-center w-full">
        {getAllProduct.map((e) => {
          return (
            <>
              <section className="">
                <main className="  shadow-2xl mt-3 ml-3 mb-4">
                  <div className="  bg-white text-gray-700 w-40 h-44 overflow-hidden flex justify-center">
                    <img
                      className="w-40 h-40  overflow-hidden duration-1000 hover:scale-95 cursor-pointer"
                      src={"http://localhost:5001/" + e.image} alt=""
                    />
                  </div>

                  <h2
                    className=" font-sem overflow-ellipsis overflow-hidden whitespace-nowrap text-2xl text-center mt-2"
                    title=" Best HeadPhone Ever"
                  >
                    {e.name}
                  </h2>
                  <div className=" text-center">
                    <span className=" text-xl font-bold ">₹ {e.price}</span>
                    <div className="  mt-1 gap-3 flex justify-center ">
                      <span className=" text-sm line-through opacity-50">
                        ₹ 500.00
                      </span>
                      <span className=" bg-green-500 px-1.5 py-0.5 rounded-md text-xs text-white">
                        Save 20%
                      </span>
                    </div>
                  </div>
                  <div className=" flex justify-center mt-3">
                    {/* <Flex gap="middle" vertical>
                      <Rate tooltips={desc} onChange={setValue} value={value} />
                      {value ? <span>{desc[value - 1]}</span> : null}
                    </Flex> */}
                  </div>
                </main>
              </section>
            </>
          );
        })}
      </main>
    <Footer/>
    </>
  )
}

export default AllProducts
