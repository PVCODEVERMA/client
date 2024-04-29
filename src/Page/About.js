
import React from "react";
import Navbar from "../Components/Nabrar/Navbar";
import One from "../Carouser/About.jpg";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Navbar/>
      <section class="bg-[#FEFBF6] h-[700px]">
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-8 text-white">
              <h2 className=" text-white ">About Ecommerce</h2>
              <p className=" text-[#0F1035]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, facere. Repudiandae vitae hic in aperiam sapiente minima sint, ullam id alias obcaecati, doloribus fuga explicabo! Beatae ipsum architecto esse debitis.
              </p>
            </div>
            <div class="col-md-4">
              <img
                src={One}
                alt="About Hero"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </section>
     

      {/* <!-- Start Section --> */}
      <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Our Services</h1>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ex possimus minima non maiores assumenda dolores, expedita fugit doloribus voluptates animi unde rem aperiam dolorum quisquam, placeat cumque quo maxime!
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-truck fa-lg"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fas fa-exchange-alt"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-percent"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Promotion</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-user"></i>
              </div>
              <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-5" />

      {/* <!-- End Section --> */}

      <div id="faq-section"></div>

      {/* <!-- Start Brands --> */}
      <section class="bg-light py-5">
        <div class="container my-4">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Brands</h1>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis error velit, enim nam dolorum autem hic aspernatur dignissimos quidem voluptatum perspiciatis suscipit, et laboriosam, quia amet voluptate? Voluptate, vel.
              </p>
            </div>
            <div class="col-lg-9 m-auto tempaltemo-carousel">
              <div class="row d-flex flex-row">
             

              
                <div class="col">
                  <div
                    class="carousel slide carousel-multi-item pt-2 pt-md-0"
                    id="templatemo-slide-brand"
                    data-bs-ride="carousel"
                  >
                    {/* <!--Slides--> */}
                    <div
                      class="carousel-inner product-links-wap"
                      role="listbox"
                    >
                      {/* <!--First slide--> */}
                      <div class="carousel-item active">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img rounded-circle"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLfwc3ICEYDq-SbxcWM5iHYSkQ0pPNpjHEA&usqp=CAU"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img rounded-circle"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLfwc3ICEYDq-SbxcWM5iHYSkQ0pPNpjHEA&usqp=CAU"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img rounded-circle"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLfwc3ICEYDq-SbxcWM5iHYSkQ0pPNpjHEA&usqp=CAU"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img rounded-circle"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLfwc3ICEYDq-SbxcWM5iHYSkQ0pPNpjHEA&usqp=CAU"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!--End First slide--> */}

                    

                    </div>
                    {/* <!--End Slides--> */}
                  </div>
                </div>
               

                
              </div>
            </div>
          </div>
        </div>
        
      </section>
      {/* <!--End Brands--> */}
    <Footer/>
  
    </>
  );
};

export default About;
