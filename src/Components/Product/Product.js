import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = () => {
  const [category, setCategory] = useState();
  const [photo, setPhoto] = useState();
  const [name, setName] = useState();
  const [offer, setoffer] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [categorieName, setcategorieName] = useState();
  const [getAllProduct, setgetAllProduct] = useState([]);
  const [categoryID, setcategoryId] = useState();
  // Edite state start
  const [loadingEdit, setLoading] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const EditModal = () => {
    setOpenEdit(true);
  };

  const handleOkEdit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancelEdit = () => {
    setOpenEdit(false);
  };

  // Edite state 


  const categoryId = (e) => {
    const id = e.target.value;
    setcategoryId(id);
  };

  const postProduct = async () => {
    const P_Form = new FormData();
    P_Form.append("categoryId", categoryID);
    P_Form.append("name", name);
    P_Form.append("price", price);
    P_Form.append("offer", offer);
    P_Form.append("image", photo);
    P_Form.append("description", description);

    const res = await fetch("http://localhost:5001/api/v1/product/", {
      method: "POST",
      body: P_Form,
    });
    const data = await res.json();
    toast.success(data.message);
    lodingproduct()
  };
 
const DeleteProductById = async (id) => {
    if (window.confirm("are your sur")) {
      const record = await fetch("http://localhost:5001/api/v1/product/" + id, {
        method: "DELETE",
      });
      const data = await record.json();
      // alert(data.message);
      toast.error(data.message);
      lodingproduct();
    }
  };

  const lodingproduct = async () => {
    const res = await fetch("http://localhost:5001/api/v1/product/", {
      method: "GET",
    });
    const data = await res.json();
    setgetAllProduct(data);
  };

  const loadingCategry = async () => {
    const res = await fetch("http://localhost:5001/api/v1/categry", {
      method: "GET",
    });
    const data = await res.json();
    setcategorieName(data);
    // setcategoryId(data);
  };

  const [subcategory, setsubcategory] = useState([]);
  const getsubCategoryByid = async (e) => {
    const id = e.target.value;

    const res = await fetch("http://localhost:5001/api/v1/subcategry/" + id, {
      method: "GET",
    });
    const data = await res.json();
    setsubcategory(data);
  };

  useEffect(() => {
    getAllCategry();
    loadingCategry();
    lodingproduct();
  }, []);

  const getAllCategry = async () => {};

  {
    /* Grocery model start */
  }
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  {
    /* Grocery model end */
  }
  return (
    <>
     
      {/* Product model start */}
      <Modal
        open={open}
        title="PRODUCT"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            {/* Category start */}

            <div className=" m-1 w-75 ">
              <h1 className=" flex justify-start">Category</h1>
              <select
                bordered={false}
                placeholder="category"
                size="large"
                shpwSerch
                className="form-select mb-3"
                onChange={getsubCategoryByid}
              >
                <option value="">select category</option>
                {categorieName.map((c) => (
                  <option value={c._id}>{c.categorieName}</option>
                ))}
              </select>
              {/* Category end */}
              {/* SubCategory end */}
              <h1 className=" flex justify-start font-extralig">SubCategory</h1>
              <select
                bordered={false}
                placeholder="Catefory"
                size="large"
                shpwSerch
                className="form-select mb-3"
                onChange={categoryId}
              >
                <option>Select SubCategry</option>;
                {subcategory.map((e) => {
                  return <option value={e._id}>{e.subCategorieName}</option>;
                })}
              </select>
              {/* SubCategory end */}
              {/* Create  img  start*/}
              <div className=" mb-3">
                <label className=" btn btn-outline-secondary col-md-12 flex justify-center">
                  {photo ? photo.name : "Upload photo"}
                  <input
                    type="file"
                    name="photo"
                    id="image"
                    accept="image/*"
                    onChange={(e) => {
                      setPhoto(e.target.files[0]);
                    }}
                    hidden
                  />
                </label>
              </div>
              <div className=" mb-3">
                {photo && (
                  <div className="flex justify-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"50px"}
                      className="img h-24 w-28 img-responsive"
                    />
                  </div>
                )}
              </div>
              {/* Create img end*/}
              {/* Create Name start */}
              <div className=" mb-3">
                <h1 className=" flex justify-start">Name</h1>
                <input
                  type="text"
                  value={name}
                  placeholder="name"
                  className="form-control"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              {/* Create Name end */}
              {/* Create Price start */}
              <div className=" mb-3">
                <h1 className=" flex justify-start">Price</h1>
                <input
                  type="number"
                  value={price}
                  placeholder="Price"
                  className="form-control"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              {/* Create Price end */}
              {/* Create offer start */}
              <div className=" mb-3">
                <h1 className=" flex justify-start">Offer</h1>
                <input
                  type="text"
                  value={offer}
                  placeholder="offer"
                  className="form-control"
                  onChange={(e) => {
                    setoffer(e.target.value);
                  }}
                />
              </div>
              {/* Create offer end */}
              {/* Create Description start */}
              <div className=" mb-3">
                <h1 className=" flex justify-start">Description</h1>
                <TextArea
                  type="text"
                  value={description}
                  placeholder="Description"
                  className="form-control"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              {/* Create Description end */}
            </div>
            <Button onClick={postProduct}>Save</Button>
            <CancelBtn />
          </>
        )}
      ></Modal>
      {/* Product model end */}
      {/* Edit product start */}
    
      <Modal
        open={openEdit}
        title="Title"
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        footer={[
          <Button className=" btn" onClick={handleCancelEdit}>
            UpDate
          </Button>,
          <Button  className="btn btn-warning" >
            Cancel
          </Button>,
         
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      {/* Edit product end */}
      <div class="container mt-3">
        <div className=" flex justify-between">
          <h2 className=" font-semibold ">Create Grocery Product list</h2>
          <button className="btn" type="primary" onClick={showModal}>
            Create
          </button>
        </div>
        <table class="table table-borderless table-responsive  table-hover table-borderless table-bordered">
          <thead>
            <tr>
              <th>PIC</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getAllProduct.map((e) => {
              return (
                <>
                  <tr>
                    <td>
                      <img
                        className=" rounded-full h-10 w-10"
                        src={"http://localhost:5001/" + e.image}
                        alt=""
                      />
                    </td>
                    <td>{e.name}</td>
                    <td className=" gap-7">
                    <a type="primary"  onClick={EditModal} className="btn">
                    Edit
                   </a>
                      <label
                        onClick={() => {
                          DeleteProductById(e._id);
                        }}
                        className=" mx-3 btn btn-primary "
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </>
  );
};

export default Product;
