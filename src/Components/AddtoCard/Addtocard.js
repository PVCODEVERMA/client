import React, { useEffect, useState } from "react";
import Navbar from "../Nabrar/Navbar";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import { json, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Addtocard = () => {
  const [cookie, createcookie, removecookie] = useCookies();
  const user = cookie["user"];
  console.log(user)

  // const Addtocard = useNavigate();
 const [lodingcard, setlodingcard] = useState([]);
 
  const lodingproductCartId = async () => {
    const res = await fetch(
      "http://localhost:5001/api/v1/AddCard/" + user._id,
      {
        method: "GET",
        
      }
    );
    const data = await res.json();
    setlodingcard(data)
    
  };

  useEffect(() => {
    lodingproductCartId();
  }, []);
  return (
    <>
      <Navbar />
      
   
      {lodingcard.map=((e)=>{
        return(
          <>
           <section className=" w-[100%] flex gap-5  justify-center bg-slate-400">
        
        <main className="mt-5 w-[50%] h-[80%] bg-white">
          <div className=" flex justify-center gap-1">
            <span className="w-[15%] text-center mb-2 ">
              <div className=" h-20 w-20 mt-3 card shadow bg-black">
                <img src={"http://localhost:5001/" + e.image} alt="" />
              </div>

              <div className="flex justify-center">

                <Button
                
                  className=" text-black  font-bold "
                  type="primary"
                  shape="circle"
                >
                  -
                </Button>

                <span className="shadow-lg rounded-lg w-16 h-6 mt-2 bg-white text-black ">
                  0
                </span>
                <Button
                  className=" text-black  font-bold "
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
              </div>
            </span>
            <span className=" w-[50%] bg-zinc-900"></span>
            <span className="bg-success w-[30%]">gvfv</span>
          </div>
        </main>
        <main className="card mt-5 shadow-lg h-96 w-[25%] bg-white">
          fadeffdgd
        </main>
 
</section>

          </>
        )
        })} 
   

    </>
  );
};

export default Addtocard;
