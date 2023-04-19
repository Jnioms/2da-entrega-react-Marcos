import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemListComponent = (props) => {
  const { data } = props;
  const { id: idProduct, title, image, description, price, rating:{count:stock} } = data;
  const [_stock, _setStock] = useState(stock || 0);

  const handlerActionAdd = () => {
    if (_stock > 0) {
      _setStock(_stock - 1);
    }
  };

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat(" ...")
      : value;
  };
  return (
    <div className="card mb-4 box-shadow">
      <div className="card-header ">{showShortValue(title, 25)}</div>
      <img className="card-img-top" width={400} height={400} src={image} alt="" />
      <div className="card-body">
        <p className="card-text">{showShortValue(description)}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <NavLink to={`/item/${idProduct}`}>
              <button className="btn btn-sm btn-outline-secondary">
                More Info...
              </button>
            </NavLink>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={handlerActionAdd}
            >
              Add to Cart
            </button>
          </div>
          <small className="text-muted">
            $ {price} - Stock: {_stock}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ItemListComponent;
