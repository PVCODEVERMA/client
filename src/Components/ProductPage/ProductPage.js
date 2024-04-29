import React, { useEffect, useState } from "react";
import Navbar from "../Nabrar/Navbar";
import Footer from "../../Page/Footer";
import { json, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = () => {
  const [cookie, createcookie, removecookie] = useCookies();
  const user = cookie["user"];
  const jump = useNavigate();
  const navigate = useNavigate();

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
    <div>
      <Navbar />
      <main className=" flex flex-wrap justify-center w-full">
        {product.map((e) => {
          return (
            <>
              <section className="">
                <main className="  shadow-2xl mt-3 ml-3 mb-3">
                  <div className="  bg-white text-gray-700 w-44 h-44  overflow-hidden flex justify-center">
                    <img

                      className="w-44 h-h-40  overflow-hidden duration-1000 hover:scale-95 cursor-pointer"
                      src={"http://localhost:5001/" + e.image}
                      alt=""
                    />
                  </div>

                  <div className="text-center">
                    <h1 className=" font-bold">{e.name}</h1>
                    <h1 className=" text-success font-bold">₹{e.price}</h1>
                    <p className=" text-center">{e.description}</p>
                    <button
                      onClick={() => {
                        navigate('/details',{state:e})
                      }}
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      DETAILS
                    </button>
                    <br />
                    <button
                      type="button"
                      onClick={() => {
                        GetAddProductCard(e._id);
                      }}
                      class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-900"
                    >
                      ADD TO CAR
                    </button>
                    <br />
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
