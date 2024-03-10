import React, { useState } from "react";
import Navbar from "../Nabrar/Navbar";
import Footer from "../../Page/Footer";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";


const notify = () => toast('Here is your toast.');

const Register = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [cookie, createcookie, removecookie] = useCookies();

  // const Registerpage= (e) => {
  //    e.preventDefault()
  //    var res="";
  //    var email="ss";
  //    if(res==="account created")
  //    {
  //       createcookie("user",email);

  //       //to read cookie
  //       var m=cookie["user"];
  //    }
  // };
  // var res="";
  // var  useremail ="ss";
  const registerpage = async () => {
    const res = await fetch(
      "http://localhost:5001/api/v1/register/authregister",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      }
    );
    const data = await res.json();
    const user = data.user;
    //  var  useremail ="ss";
    if (res.ok) {
      createcookie("user", user);
      alert(data.toast.success('Successfully toasted!'));

      var m = cookie["user"];
    }
  };

  return (
    <>
      <Navbar />

      <main className="w-[100%] bg-[#B2B377] flex justify-center">
        <div className="w-[30%] bg-[#FFFFFF] flex justify-center mb-4 mt-4 rounded-lg drop-shadow-2xl">
          <div className=" w-[65%]">
            <h1 className="text-[35px] mt-2">Register Page</h1>
            <div className=" mb-3 w-full ">
              <div>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">
                    Name
                  </label>
                  <input
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    placeholder="Enter Your Name"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail" class="form-label">
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
          <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agrement"
                      className=" text-primary focus:ring-0 cursor-pointer"
                    />
                    <label
                      htmlFor="agrement"
                      className=" text-gray-600 ml-3 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link to="/forget" className=" text-primary">
                    Forgot password
                  </Link>
                </div>
                <div className=" mt-4">
                  <button
                    onClick={registerpage}
                    className=" block w-full py-2 text-center text-white bg-primary border border-primary hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium "
                  >
                    Register
                  </button>
                </div>
                <div className=" mt-6 flex justify-center relative">
                  <div className="text-gray-600 uppercase px-3 bg-white z-10  relative">
                    OR
                  </div>
                  <div className=" absolute left-0 top-0 w-full border-b-2 border-gray-200 "></div>
                </div>
                <p className=" mt-4 text-gray-600 text-center">
                  Don't have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Login now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Toaster />
      </main>
      <Footer />
    </>
  );
};

export default Register;
