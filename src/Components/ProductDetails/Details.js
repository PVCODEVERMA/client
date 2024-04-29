import React, { useEffect, useState } from "react";
import Navbar from "../Nabrar/Navbar";
import { useNavigation } from "react-router-dom";
import { Image,Button } from 'antd';
import { useLocation , useNavigate} from 'react-router-dom';
// import { json, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Footer from "../../Page/Footer";
import { ToastContainer, toast } from "react-toastify";

const Details = () => {
  const navigate = useNavigate();
  const notify = () => toast("Wow so easy!");

  const location=useLocation()
  const data = location.state

 
  const [cookie, createcookie, removecookie] = useCookies();
  const user = cookie["user"];
  const jump = useNavigate();
  const GetAddProductCard = async (p_id) => {
    if (cookie["user"] == null) {
      jump("/login");
    } else {
      const res = await fetch("http://localhost:5001/api/v1/AddCard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user._id,
          productId: p_id,
        }),
      });
      const data = await res.json();
      toast.success(data.message);
    }
  };
  const stete = useLocation();
  const id = stete.state.id;

  const [product, setproduct] = useState([]);
  const lodingloding = async () => {
    const res = await fetch("http://localhost:5001/api/v1/product/" + id, {
      method: "GET",
    });
    const data = await res.json();
    setproduct(data);
  };


  useEffect(() => {
    lodingloding();
  }, []);
  return (
    <>
      <Navbar />
      
      <header className="">
        <main className="lg:flex lg:justify-center  sm:flex-wrap sm:justify-center lg:w-[100%] md:w-[100%] md:flex md:justify-center">
          <section className="lg:w-[40%] col-12 p-10  flex justify-center">
            <Image width={450} src={"http://localhost:5001/" + data.image}/>
          </section>
          <section className="lg:w-[40%] col-12 p-10">
            <main className="">

              <p className=" text-black font-semibold">{data.name}</p>
              
              <div className="flex gap-1">
                <s className=" text-[#48515B]">₹1999</s>
                <p className="text-black">₹{data.price}</p>
                <h1 className=" text-[#25A541]">{data.price}% off</h1>
              </div>
              <p className=" text-black font-semibold">{data.description}</p>
             

              <div className=" flex gap-2">
              <div className=" flex">
               <Button   className="btn btn-info" >
                  BUY NOW
              </Button>
              
             
              
               </div>
               <Button  onClick={ () => {
                        GetAddProductCard(data._id);
                      }} className=" btn btn-success">ADD TO CART</Button>
               </div>
            </main>
          </section>
          
        </main>
        
      </header>
      <ToastContainer />
      <Footer/>
    </>
  );
};

export default Details;
