import React, { useEffect, useState } from "react";
import api from "../api/ProductApi";
import { useNavigate } from "react-router-dom";
// import SortProd from "./Sort";

function StoreItem() {
  const [products, setProducts] = useState("");

  const history = useNavigate();
  const retrieveProducts = async () => {
    return api.get("/products");
  };
  useEffect(() => {
    retrieveProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      {/* <SortProd products={products} /> */}
      <div
        className="prods"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "2vh",
        }}
      >
        {products &&
          products.map((elem) => (
            <div
              className="prod"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "22%",
                height: "30vh",
                // border: "1px solid red",
                padding: "2vh",
              }}
              key={elem.id}
              onClick={() => history(`/product/${elem.id}`)}
            >
              <img
                style={{
                  width: "100%",
                  height: "21vh",
                }}
                src={elem.image}
                alt={elem.id}
              />
              <h4
                style={{
                  marginTop: "2vh",
                  fontFamily: "monserrat",
                  fontSize: "22px",
                  fontWeight: "400",
                }}
              >
                {elem.name}
              </h4>
              <span style={{ marginTop: "0vh" }}>Rs. {elem.price}/-</span>
            </div>
          ))}
      </div>
    </>
  );
}

export default StoreItem;
