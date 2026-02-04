import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import "./Header.css";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="container header-inner">

        <Link to="/" className="logo">E-Shop</Link>

        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/help">Help</NavLink>
        </nav>

        <div className="nav-actions">
          <NavLink to="/login" className="nav-link">Login</NavLink>

          <NavLink to="/cart" className="cart-link">
            🛒 Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </NavLink>
        </div>

      </div>
    </header>
  );
}
