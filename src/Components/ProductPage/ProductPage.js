import React, { useEffect, useState } from "react";
import Navbar from "../Nabrar/Navbar";
import Footer from "../../Page/Footer";
import { json, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductPage = () => {
  const [cookie, createcookie, removecookie] = useCookies();
  const user=cookie["user"]
  const jump = useNavigate();

  
  const GetAddProductCard = async (p_id) => {
    if (cookie["user"] == null) {
      jump("/login");
    } else {
     
      const res = await fetch("http://localhost:5001/api/v1/AddCard", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
          userId: user._id,
          productId: p_id
        })

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
    <div>
      <Navbar />
      <main className=" flex flex-wrap justify-center w-full">
        {product.map((e) => {
          return (
            <>
              <section className="">
                <main className="  shadow-2xl mt-3 ml-10 mb-4">
                  <div className="  bg-white text-gray-700 w-72 min-h-[8rem]  overflow-hidden flex justify-center">
                    <img
                      className="w-72 h-72  overflow-hidden duration-1000 hover:scale-95 cursor-pointer"
                      src={"http://localhost:5001/" + e.image}
                      alt=""
                    />
                  </div>

                  <div className=" flex justify-around">
                    <h1 className=" font-bold">{e.name}</h1>
                    <h1 className=" text-success font-bold">₹{e.price}</h1>
                  </div>
                  <p className=" text-center">{e.description}</p>
                  <div className=" flex gap-3 justify-center">
                    <button className=" btn btn-primary ">More Details</button>
                    <button
                      onClick={() => {
                        GetAddProductCard(e._id);
                      }}
                      className=" btn btn-secondary "
                    >
                      ADD TO CARD
                    </button>
                  </div>
                </main>
              </section>
            </>
          );
        })}
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default ProductPage;
