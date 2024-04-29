import React, { useEffect, useState } from "react";
import Navbar from "../Nabrar/Navbar";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip, message } from "antd";
import { json, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";


const Addtocard = () => {

   const removeCartItem =(e)=>{
  
   }
  const [cookie, createcookie, removecookie] = useCookies();
  const user = cookie["user"];

  const Addtocard = useNavigate();
  const [lodingcard, setlodingcard] = useState([]);
  const [totalprice,settotalprice]= useState()
  const [Discount, setDiscount] = useState();
  const [beforeDes, setbeforeDes] = useState();
  

  const lodingproductCartId = async () => {
    const res = await fetch(
      "http://localhost:5001/api/v1/AddCard/" + user._id,
      {
        method: "GET",
        
      }
    );
    const data = await res.json();
  

  
    const cart = data.data
    let totalPrice = 0
    let price = 0
    let des = 0
 
    for(let i=0;i<cart.length;i++){
      let quentity = cart[i].quentity
      for(let j=0;j<quentity;j++){
        totalPrice+=parseInt(cart[i].price)
        des+=((cart[i].offer*parseInt(cart[i].price))/100)
        price+=parseInt(cart[i].price)-((cart[i].offer*parseInt(cart[i].price))/100)
      }  
    }
    
    settotalprice(price)
    setDiscount(des)
    setbeforeDes(totalPrice)  
    setlodingcard(data.data);
  };
  
 
  const AddtoQuantity= async(qty,id)=>{
    if(qty >= 1){
      const res = await fetch("http://localhost:5001/api/v1/AddCard/"+id,{
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          qty:qty
        })
        
       })
      if(res.ok){
        lodingproductCartId()
      }
    }else{
      const res = await fetch("http://localhost:5001/api/v1/AddCard/"+id,{
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          qty: '1'
        })
        
       })
      if(res.ok){
        lodingproductCartId()
      }
    }
  
  }
  
 
  const RemoveById= async(id)=>{
   if(window.confirm("Are your sour")){
    const res = await fetch("http://localhost:5001/api/v1/AddCard/"+id,{
    method: "DELETE",
    })
    const data = res.json();
    toast.error(data.message)
    lodingproductCartId();
   }


   
  }

  useEffect(() => {
    lodingproductCartId();

  }, []);
  return (
    <>
      <Navbar />
    
  <div className="row w-[100%] bg-[#f4f4f4] overflow-hidden">
    <div className=" flex justify-around">
    <div className="col-md-4 w-[50%]">
      {lodingcard.map((e)=>{
        return(
          <div className="row mb-2 p-3 mt-5 card flex-row">
            <div className="col-md-4">
              <img className="card-img-top h-[100px] w-[100px]" src={"http://localhost:5001/" + e.image} alt={e.name}  />
               <div className=" flex">
               <Button onClick={()=>{AddtoQuantity(parseInt(e.quentity)+1,e._id)}} className=" font-bold text-black" type="primary" shape="circle">
                    +
              </Button>
              <p className="w-5 h-5 mt-2 ml-1 shadow-lg  rounded-full text-black">{e.quentity}</p>
              <Button onClick={()=>{AddtoQuantity(parseInt(e.quentity)-1,e._id)}} className=" font-bold text-black" type="primary" shape="circle">
                    -
              </Button>
              
               </div>

            </div>
             <div className=" col-md-8">
              <div className=" flex justify-between">
              <p>{e.name}</p>
                <p>Delivery by Thu Mar 21||{e.offer}% off</p>
              </div>
             
            <p>{e.description}</p>
            <p>{e.price}</p>
            <span onClick={()=>{RemoveById(e._id)}} className=" btn btn-danger">Remove</span>


             </div>
          </div>
        )
      })}
    </div>
    
    <div className="w-[30%] h-[300px] card col-md-4 mt-10 overflow-hidden">
    <h7 className=" text-center mt-2">PRICE DETAILS</h7>
      
      <div className=' flex justify-around'>
        <h4>Price ({lodingcard.length}items)</h4>
        <h4>₹{beforeDes}</h4>
      </div>
      <div className=' flex justify-around'>
        <h4>Discount</h4>
        <h4>-₹{Discount}</h4>
      </div>
      
      <div className=' flex justify-around mt-5'>
        <h4 className="m-3">Total Amount</h4>
        <h4 className="m-3">₹{totalprice}</h4>
      </div>
      <p className=" m-3">You will save ₹13,359 on this order</p>


    </div>
    </div>
  </div>


     
    </>
  );
};

export default Addtocard;
