import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

const Home = lazy(() => import("./pages/Home/Home"));
const Products = lazy(() => import("./pages/Products/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Account = lazy(() => import("./pages/Account/Account"));
const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const About = lazy(() => import("./pages/About/About"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const HelpCenter = lazy(() => import("./pages/HelpCenter/HelpCenter"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const Returns = lazy(() => import("./pages/Returns/Returns"));
const Privacy = lazy(() => import("./pages/Privacy/Privacy"));
const Terms = lazy(() => import("./pages/Terms/Terms"));

export default function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Suspense fallback={<div style={{ padding: 24 }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
