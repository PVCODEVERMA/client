import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Admin from "./Page/Admin";
import Categories from "./Page/Categories";
import Dashboard from "./Page/Dashboard";
import Orders from "./Page/Orders";
import Sellers from "./Page/Sellers";
import Shop from "./Page/Shop";
import Subcategory from "./Page/Subcategory";
import Products from "./AllProducts/Products";
import Fashion from "./Components/Fashion/Fashion";
import ProductPage from "./Components/ProductPage/ProductPage";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Forget from "./Components/Auth/Forget";
import Addtocard from "./Components/AddtoCard/Addtocard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/subcategory" element={<Subcategory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/addtocard" element={<Addtocard />} />
      </Routes>
    </>
  );
}

export default App;
