import React from "react";
import data from "../data.json";
import Products from "./Products";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      size: [],
      order: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ order: target.value });
  };

  handleClick = (size) => {
    if (this.state.size.includes(size)) {
      this.setState((prevState) => ({
        size: prevState.size.filter((s) => s !== size),
      }));
    } else {
      this.setState((prevState) => ({
        size: prevState.size.concat(size),
      }));
    }
  };

  render() {
    let allProducts = data.products;
    let sizes = allProducts.reduce((acc, cv) => {
      acc = acc.concat(cv.availableSizes);
      return acc;
    }, []);

    let uniqueSizes = [...new Set(sizes)];

    let allItems = allProducts;

    // if (this.state.size.length) {
    //   allItems = [...allProducts].filter((product) => {
    //     for (let s of this.state.size) {
    //       return (product.availableSizes.includes(s))
    //     }
    //   }}

    if (this.state.order === "lowest") {
      allItems = allItems.sort((a, b) => a.price - b.price);
    } else if (this.state.order === "highest") {
      allItems = allItems.sort((a, b) => b.price - a.price);
    }

    return (
      <div className="flex">
        <aside className="flex-20 aside">
          <h2>Filter:</h2>
          <select
            name=""
            className="filter"
            onChange={this.handleChange}
            value={this.state.order}
          >
            <option value="select">Select</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
          <h2>Sizes: </h2>
          <div className="flex wrap sizeBox">
            {uniqueSizes.map((size) => (
              <span
                key={size}
                className={`center size ${
                  this.state.size.includes(size) ? "active" : ""
                }`}
                onClick={() => this.handleClick(size)}
              >
                {size}
              </span>
            ))}
          </div>
        </aside>
        <div className="flex-78">
          <h3>{allItems.length} Product(s) Found</h3>
          <Products item={allItems} />
        </div>
      </div>
    );
  }
}

export default Main;
