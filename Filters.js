import React,{useState} from "react";
import "./filter.css";
import { useParams } from "react-router-dom";

import filterIcon from "../Images/icons/filterIcon.png";
function Filters() {
  const { id } = useParams();

  const filterPannel = [
    {
      id: 1,

      brand: "Puma",
      price: 3500,
    },
    {
      id: 2,

      brand: "Nike",
      price: 8499,
    },
    {
      id: 3,

      brand: "Adidas",
      price: 4560,
    },
    {
      id: 4,

      brand: "Puma",
      price: 2250,
    },
    {
      id: 5,

      brand: "Nike",
      price: 9899,
    },

    {
      id: 6,

      brand: "Nike",
      price: 2699,
    },
  ];
  let uniqueBrands = [...new Set(filterPannel.map((el) => el.brand))];
  let uniquePrices = [...new Set(filterPannel.map((el) => el.price))];
  // function filterRange(uniquePrices, a, b) {
  //   return uniquePrices.filter((item) => a <= item && item <= b);
  // }

  // console.log(uniquePrices);
  const [ListOfId,setList]=useState([])
  // console.log(filterPannel);
  const changeHandle1 = ((e,id) => {
    // e.preventDefault()
  setList(id)
})

const changeHandle = ((e) => {
  // e.preventDefault()
})
console.log(ListOfId)

  return (
    <div>
      <div className="filterHeader">
        <h2>FILTERS</h2>
        <img src={filterIcon} alt="noImage" />
      </div>
      <div className="filterBox">
        <h3>Cost</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label className="container">
            Rs. {1500}-{4000}
            <input onChange={changeHandle} type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Rs. {4001}-{7000}
            <input onChange={changeHandle} type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Rs. {7001}+
            <input onChange={changeHandle} type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>

        <h3>Brand</h3>
        {uniqueBrands.map((el) => (
          <label className="container">
            {el}
            <input onChange={changeHandle1(id)} type="checkbox" />
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
      <button className="filterButton">Apply</button>
    </div>
  );
}

export default Filters;
