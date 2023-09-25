import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./pages/Index";
import Products from './pages/Product/Products'
import NewArrivals from './pages/Product/NewArrival'
import Offers from './pages/Product/Offer'
import TopSelling from './pages/Product/TopProduct'
import HomeLayout from './pages/Product/HomeLayout'
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import ProductSelectionPage from "./container/WIshListCartContainer";
import CheckoutPage from "./pages/payment/CheckoutPage";
import CartPage from "./container/CartPageContainer";
import ProductDetailsContaine from "./container/ProductDetailsContainer";
import DashboardLayout from "./DashBoard/DashboardLayout";
import AddProduct from "./DashBoard/AddProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/" element={<HomeLayout />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/top-selling" element={<TopSelling />} />
          <Route path="/product-details/:name/:price" element={<ProductDetailsContaine />} />
          {/* About us footer*/}
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/About-us" element={<About />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/select-card" element={<ProductSelectionPage />} />
          <Route path="/checkout-page" element={<CheckoutPage />} />
          <Route path="/cartPage" element={<CartPage />} />

          <Route path="/*" element={<NotFound />} />


        </Route>
        <Route path="/*" element={<NotFound />} />
        {/* Dashboard */}

        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/addProduct" element={<AddProduct />} />

      </Routes>
    </Router>
  )
}

export default App;