import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from 'antd';


function CategoriesAdmin() {
  const [getAllCotagry, setgetAllCotagry] = useState([]);
  const [categry, setCategry] = useState([]);
  const [img, setimg] = useState();
  const [idEdite, setidEdite] = useState();
  const [edtcatname, setedtcatname] = useState();
  const [editeimg, setediteimg] = useState();
  
  const getcategorybyId = async (id) => {
    const res = await fetch("http://localhost:5001/api/v1/categry/" + id, {
      method: "GET",
    });
    const data = await res.json();
    setedtcatname(data.categorieName);
    setediteimg(data.img);
    setidEdite(id);
    loadingCategry();
  };

  //editeCatedry start

  const EditeCategrySave = async () => {
    const res = await fetch("http://localhost:5001/api/v1/categry/" + idEdite, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        cname: edtcatname,
        cimg: editeimg,
      }),
    });
    const data = await res.json();
    toast.success(data.message);
    loadingCategry();
  };

  //editeCatedry end

  // recordeSave start

  const RecordSave =  async() => {
   
    const C_Form = new FormData();
    C_Form.append("categorieName", categry);
    C_Form.append("img", img);
    const res = await fetch("http://localhost:5001/api/v1/categry", {
      method: "POST",
      body: C_Form,
      
    });
    
    const data  = await res.json()
    console.log(data)
   
    toast.success(data.message);
    loadingCategry();
   
  };
  
  // recordeSave end

  const loadingCategry = async () => {
    const res = await fetch("http://localhost:5001/api/v1/categry", {
      method: "GET",
    });
    const data = await res.json();

    setgetAllCotagry(data);
    toast.isActive(data.message)
  };

  //record delete start
  const DeleatCategry = async (id) => {
    if (window.confirm("are your sur")) {
      const record = await fetch("http://localhost:5001/api/v1/categry/" + id, {
        method: "DELETE",
      });
      const data = await record.json();
      // alert(data.message);
      toast.error(data.message);
      loadingCategry();
    }
  };
  //record delete end
  useEffect(() => {
    loadingCategry();
  }, []);

 
  return (
    <>
      <div class="container ">
        <div className=" flex justify-end">
          {/* Create categry model start */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Create New Category
          </button>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="flex justify-center">
              <div className="">
                <label htmlFor="image">
                  <FaRegUserCircle className="h-28 w-28 border rounded-full  ml-12" />
                </label>
                <input
                  name="img"
                  id="image"
                  className=" hidden"
                  onChange={(e) => {
                    setimg(e.target.files[0]);
                  }}
                  type="file"
                />

                <br />
                <label for="Name">Name</label>
                <br />
                <input
                  onChange={(e) => {
                    setCategry(e.target.value);
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Enter Product Name"
                />
                <br />
                <div class="d-grid">
                  <button
                    onClick={RecordSave}
                    type="button"
                    class="btn btn-primary btn-block"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        {/* Create categry model end */}

        {/* edit model start */}

        <div className="modal" role="dialog" id="EditeCategry">
          <div className="modal-box">
            <h3 className="font-bold text-lg">EditeCategry</h3>
            <label className="flex justify-center" htmlFor="image">
              <FaRegUserCircle className=" h-28 w-28 " />
            </label>
            <img
              id="image"
              className="hidden"
              src={"http://localhost:5001/" + editeimg}
              alt=""
            />
            <input className=" hidden" id="image" type="file" /> <br />
            <div className="flex justify-center">
              <input
                type="text"
                className=" form-control"
                value={edtcatname}
                name="categorieName"
                id="categorieName"
                required
                placeholder="Inter Product Name "
                onChange={(e) => {
                  setedtcatname(e.target.value);
                }}
              />
            </div>
            <br />
            <div class="d-grid">
              <button
                type="button"
                onClick={EditeCategrySave}
                class="btn btn-primary btn-block"
              >
                Save
              </button>
            </div>
            <div className="modal-action">
              <a href="#" className="btn">
                Close
              </a>
            </div>
          </div>
        </div>
        {/* edit model end */}

        <div className="overflow-x-auto">
          <h1 className=" text-lg font-semibold"> All Product Categories</h1>
          <table className="table table-bordered table-hover">
            {/* head */}
            <thead>
              <tr className=" text-center uppercase ">
                <th>PIC</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {getAllCotagry.map((e) => {
                return (
                  <tr className=" text-center">
                    <td>
                    <Image
                       
                      width={30}
                        src={"http://localhost:5001/" + e.img}
                         
                       />
                      {/* <img
                        className=" w-10 h-10 rounded-full"
                        src={"http://localhost:5001/" + e.img}
                        alt=""
                      /> */}
                    </td>
                    <td>{e.categorieName}</td>
                    <td className=" gap-7">
                      <a
                        href="#EditeCategry"
                        onClick={() => {
                          getcategorybyId(e._id);
                        }}
                        className="btn "
                      >
                        Edit
                      </a>
                      <label
                        onClick={() => {
                          DeleatCategry(e._id);
                        }}
                        className=" mx-3 btn btn-primary "
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* foot */}
          </table>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default CategoriesAdmin;
