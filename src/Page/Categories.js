import Navbar from "../Components/Nabrar/Navbar";
import CategoriesAdmin from "../Components/CategoriesAdmin";
import AdminCategoties from "../Components/AdminCategoties";
import Footer from "./Footer";
function Categories() {
  return (
    <>
      <nav className="">
        <Navbar />
        <div className=" flex">
          <AdminCategoties />
          <CategoriesAdmin />
        </div>
        <Footer />
      </nav>
    </>
  );
}

export default Categories;
