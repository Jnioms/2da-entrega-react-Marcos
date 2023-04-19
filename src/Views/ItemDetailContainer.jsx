import React, { Fragment } from "react";
import { useParams, NavLink } from "react-router-dom";
import useFetch from "../Utils/useFetch";

const BASE_URL = "https://fakestoreapi.com/products";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data] = useFetch(`${BASE_URL}/${id}`);
  const { title, image, description, price, category } = data;
  return (
    <Fragment>
      <div className="row my-5">
        <div className="col-4">
          <h3>
            Category: <span className="text-info">{category}</span>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-md-3">
          <div className="card mb-3 box-shadow py-2 px-5">
            <div className="row">
              <div className="card-header ">{title}</div>
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    <small className="text-muted">$ {price}</small>
                  </p>
                  <NavLink to={`/`}>
                    <button className="btn btn-outline-danger btn-sm">
                      Go back!
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemDetailContainer;
