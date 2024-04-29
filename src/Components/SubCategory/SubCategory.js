import { useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import { Image } from 'antd';
const SubCategory = () => {
  const [categorieId, setcategorieId] = useState();
  const [subCategorieName, setsubCategorieName] = useState();
  const [subimg, setsubimg] = useState();
  const [suballcategry, setsuballcategry] = useState([]);
  const [categry, setcategry] = useState([]);
  const [IditCategry, setIditCategry] = useState([]);
  const [saveEditId, setsaveEditId] = useState();
  const [subCategorieNameEdit, setsubCategorieNameEdit] = useState();
  const [idEdit , setidEdit] = useState();
  const [subImg ,setsubImg] = useState();
  
  
  // subCategry Edite start API

 

  const postSubCategry = async () => {
    const res = await fetch("http://localhost:5001/api/v1/subcategry/" + idEdit, {
      method: "PUT",
      headers: { "content-type": "application/json"},
      body: JSON.stringify({
        subname: subCategorieNameEdit,
        simg: subImg
        
      }),
    });
   const data = await res.json();
     alert(data.message)
  };

  // subCategry Edite end API

  const RecordSave = async () => {
    const S_FROM = new FormData();
    S_FROM.append("categorieId", categorieId);
    S_FROM.append("subCategorieName", subCategorieName);
    S_FROM.append("img", subimg);

    const res = await fetch("http://localhost:5001/api/v1/subcategry", {
      method: "POST",
      body: S_FROM,
    });
    const data = await res.json();
    toast.success(data.message);
  };

  const idchange = (e) => {
    const id = e.target.value;
    setcategorieId(id);
  };
  const idchange_edit = (e) => {
    const id = e.target.value;
    setsaveEditId(id);
  };
  const sublodingCategry = async () => {
    const res = await fetch("http://localhost:5001/api/v1/subcategry", {
      method: "GET",
    });
    const data = await res.json();
    setsuballcategry(data);
  };

  const loadingCategry = async () => {
    const res = await fetch("http://localhost:5001/api/v1/categry", {
      method: "GET",
    });
    const data = await res.json();
    setcategry(data);
    setIditCategry(data);
  };

  const deleteSubCategry = async (id) => {
    if (window.confirm("Are your sure")) {
      const record = await fetch(
        "http://localhost:5001/api/v1/subcategry/" + id,
        {
          method: "DELETE",
        }
      );
      const data = await record.json();
      toast.error(data.message);
      sublodingCategry();
    }
  };

  useEffect(() => {
    sublodingCategry();
    loadingCategry();
  }, []);

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box">
          <h1 className="font-bold text-lg">SubCategory Product Create</h1>
          <header className="flex  w-[100%] h-[20vh]">
            <div className="w-[30%] h-[20vh] ">
              <label htmlFor="image">
                <CiImageOn className="  h-28 w-28 " />
              </label>
              <input
                id="image"
                className=" hidden"
                onChange={(e) => {
                  setsubimg(e.target.files[0]);
                }}
                type="file"
              />
            </div>
            <div>
              <select
                name="cat_id"
                id=""
                onChange={idchange}
                className="input input-bordered input-primary w-full max-w-xs"
              >
                 <option>select category</option>;
                {categry.map((e) => {
                  return <option value={e._id}>{e.categorieName}</option>;
                })}
              </select>
              <input
                type="text"
                onChange={(e) => {
                  setsubCategorieName(e.target.value);
                }}
                placeholder="SubCategory Name"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
          </header>
          <div class="d-grid">
            <button
              type="button"
              onClick={RecordSave}
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

      <div class="container mt-3">
        <h2 className=" font-bold font-serif">SubCategory Product </h2>

        <div className=" flex justify-end">
          <a href="#my_modal_8" className="btn">
            SubCategory
          </a>
        </div>
        <table class="table  table-borderless table-responsive table-hover table-borderless table-bordered">
          <thead>
            <tr>
              <th>Image</th>

              <th>SubProduct Name</th>
              <th>ACTION</th>
            </tr>
          </thead>

          {/* editsubModel start */}

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">SubCategory Product Edite</h3>
              <div className="flex justify-evenly">
                <main className="w-24 h-24 ">
                <label className="flex justify-center" htmlFor="image">
              {/* <FaRegUserCircle className=" h-28 w-28 " /> */}
               </label>
                    <img id="image" className=" hidden" src={"http://localhost:5001/" + setidEdit} alt="" />
                  <input className="" id="image" type="file" />
                </main>
                <main className="">
                  <select
                    onChange={idchange_edit}
                    className=" input input-bordered input-primary w-full"
                    name="edit"
                    id="edit"
                  >
                    {IditCategry.map((e) => {
                      return (
                        <option value={e.categorieName}>
                          {e.categorieName}
                        </option>
                      );
                    })}
                  </select>

                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      onChange={(e) => {
                        setsubCategorieNameEdit(e.target.value);
                      }}
                      type="text"
                      className="grow"
                      placeholder="SubCategory Name"
                    />
                  </label>
                </main>
              </div>
              <div class="d-grid">
                <button
                  onClick={() => {
                    postSubCategry();
                  }}
                  type="button"
                  class="btn btn-primary btn-block"
                >
                  Save
                </button>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          {/* editsubModel end */}
          <tbody>
            {suballcategry.map((e) => {
              return (
                <tr>
                  <td>
                    <Image
                      width={30}
                      src={"http://localhost:5001/" + e.img}
                      alt=""
                    />
                  </td>

                  <td>{e.subCategorieName}</td>

                  <td>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      type="button"
                      class="btn btn-primary active"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        deleteSubCategry(e._id);
                      }}
                      type="button"
                      class="btn mx-3 btn-outline-danger active"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </>
  );
};

export default SubCategory;
