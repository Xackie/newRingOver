import React, { useState, useEffect } from "react";

function SortProd({ products }) {
  const [sortTextvalue, setSortTextvalue] = useState("All");
  const [sortedProducts, setSortedProducts] = useState(products);
  // console.log(sortedProducts);

  const diff = products.sort((a, b) => a.price - b.price);

  const sortFunction = (sortTextvalue, products) => {
    if (sortTextvalue === "Low to High") {
      return setSortedProducts(diff);
    } else if (sortTextvalue === "High to Low") {
      return setSortedProducts(-1 * diff);
    } else {
      return setSortedProducts(products);
    }
  };

  const onSortValueChanged = (e) => {
    setSortTextvalue(e.target.value);
  };
  // console.log(sortTextvalue);

  // const ASC = 'Low to High';
  // // const DSC = 'High to Low';

  // function sortByNum(a, b, order = ASC) {
  //     const diff = a.price - b.price;

  //     if (order === ASC) {
  //         return diff;
  //     }
  // else
  //   return -1*diff
  // }
  // // else
  // //     return diff;
  // }

  // const abc=products.sort((a, b) => sortByNum(a, b, ASC))
  useEffect(() => {
    sortFunction();
    // setSortedProducts(abc)

    console.log(sortedProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortTextvalue]);

  return (
    <div className="storeHeader">
      <h2 style={{ fontWeight: "400", paddingLeft: "5vh" }}>SHOES</h2>
      <select name="Sort " onChange={onSortValueChanged} className="sortfilter">
        <option value="All">All</option>
        <option value="Low to High">Low to High</option>
        <option value="High to Low">High to Low</option>
      </select>
    </div>
  );
}

export default SortProd;
