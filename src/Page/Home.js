import React, { useEffect, useState } from "react";
import Navbar from "../Components/Nabrar/Navbar";
import Footer from "./Footer";
import One from "../Carouser/img-1.webp";
import two from "../Carouser/img-2.webp";
import Thre from "../Carouser/img-3.webp";
import { Link } from "react-router-dom";
import { Flex, Rate } from "antd";

const desc = ["terrible",];

const Home = () => {
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

  const [getAllCategry, setgetAllCotagry] = useState([]);

  const getsubCategroyId = async () => {
    const res = await fetch("http://localhost:5001/api/v1/categry", {
      method: "GET",
    });
    const data = await res.json();
    setgetAllCotagry(data);
  };

  useEffect(() => {
    getsubCategroyId();
    lodingproduct();
  }, []);
  return (
    <>
      <Navbar />

      <main className="w-[100%]  flex justify-center ">
        <div className=" w-[50%]">
          <div className=" flex flex-wrap w-full  h-16 mt-4 mb-3 gap-14 ">
            {getAllCategry.map((e) => {
              return (
                <>
                  <div class="dropdown ">
                   <div className=" flex justify-center">
                   <img
                      className=" w-10 h-10 duration-1000 hover:scale-125   rounded-lg"
                      src={"http://localhost:5001/" + e.img}
                      alt=""
                    />
                   </div>
                    <button
                      type="button"
                      class=" dropdown-toggle"
                      data-bs-toggle="dropdown"
                      onClick={() => {
                        getIdCategry(e._id);
                      }}
                    >
                      {e.categorieName}
                    </button>
                    <ul class="dropdown-menu">
                      {subcategory.map((e) => {
                        return (
                          <li>
                            <Link
                              to="/productPage"
                              state={{ id: e._id }}
                              class="dropdown-item"
                            >
                              {e.subCategorieName}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </main>
      {/* Carousel start */}
      
<div className="bg-[#F5F5DC] flex justify-center w-[100%]">
  <div className=" w-[95%] mt-5 mb-5 ">
 
 <div id="demo" class="carousel slide" data-bs-ride="carousel">

 <div class="carousel-indicators  ">
    <button type="button" style={{backgroundColor:"#387ADF"}}  data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" style={{backgroundColor:"#387ADF"}}  data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" style={{backgroundColor:"#387ADF"}}  data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div> 
  
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={One} alt="Los Angeles" class="d-block" style={{width:"100%"}}/>
   
    </div>
    <div class="carousel-item">
      <img src={two} alt="Chicago" class="d-block" style={{width:"100%"}} />
     
    </div>
    <div class="carousel-item">
      <img src={Thre} alt="New York" class="d-block" style={{width:"100%"}}/>
     
    </div>
  </div>
  

  <button class="carousel-control-prev " type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span style={{backgroundColor:"#000000"}} class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span  style={{backgroundColor:"#000000"}} class="carousel-control-next-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span  style={{backgroundColor:"#000000"}} class="carousel-control-next-icon"></span>
  </button>
  
</div> 

</div>
</div>

      {/* Carousel start */}

      {/* card start  */}

      <main className=" flex flex-wrap justify-center w-full">
        {getAllProduct.map((e) => {
          return (
            <>
              <section className="">
                <main className="  shadow-2xl mt-3 ml-10 mb-4">
                  <div className="  bg-white text-gray-700 w-72 min-h-[8rem]  overflow-hidden flex justify-center">
                    <img
                      className="w-72 h-72  overflow-hidden duration-1000 hover:scale-95 cursor-pointer"
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
                    <Flex gap="middle" vertical>
                      <Rate tooltips={desc} onChange={setValue} value={value} />
                      {value ? <span>{desc[value - 1]}</span> : null}
                    </Flex>
                  </div>
                </main>
              </section>
            </>
          );
        })}
      </main>

      {/* card end  */}

      <Footer />
    </>
  );
};

export default Home;
