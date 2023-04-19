import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import useFetch from "../../Utils/useFetch";

const BASE_URL = "https://fakestoreapi.com/products/categories";

const Navbar = () => {
  const [data] = useFetch(BASE_URL);
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <div>Shop</div>
        </NavLink>
        <div className="collapse navbar-collapse">
          <NavBarItem navItem={data} />
        </div>
        <div className="collapse navbar-collapse">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
