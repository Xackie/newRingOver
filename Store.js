import React from "react";
import StoreItem from "../Components/StoreItem";
// import Cart from "../Components/Cart";
// import Filters from "../Components/Filters";
function Store() {
  return (
    <div className="store">
      <div className="filters">
        {/* <Filters /> */}
      </div>
      <div className="products">
        <StoreItem />
      </div>
    </div>
  );
}

export default Store;
