import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/ProductApi";
// import Cart from "../Components/Cart";
function Product() {
  const { id } = useParams();
  const [singleProduct, setProduct] = useState();

  const retrieveProducts = async () => {
    return api.get(`/products/${id}`);
  };
  useEffect(() => {
    retrieveProducts().then((response) => {
      setProduct(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // const onclickHandle = (e) => {
  //   e.preventDefault();
  // };
  console.log(singleProduct);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div className="singleProd_display">
          {singleProduct && (
            <img
              style={{ width: "50%", height: "50vh" ,border:"1px solid red"}}
              src={singleProduct.image}
              alt={singleProduct.name}
            />
          )}
          {singleProduct && (
            <div className="singleProd_display__details">
              <h3>{singleProduct && singleProduct.name}</h3>
              <span>by {singleProduct.brand}</span>
            </div>
          )}
          {/* <div className="singleProd_display_buttons">
          <button>Share</button>
          <button onClick={onclickHandle}>Add to cart</button>
        </div> */}
        </div>
      </div>
      {/* <Cart /> */}
    </div>
  );
}

export default Product;
