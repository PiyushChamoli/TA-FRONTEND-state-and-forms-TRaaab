import React from "react";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cart: [],
      click: false,
    };
  }

  handleClick = (product) => {
    this.setState(
      (prevState) => ({
        cart: [...prevState.cart, product],
        count: prevState.count + 1,
      }),
      console.log(this.state.cart)
    );
  };

  // handleClick = (product) => {
  //   let isPresent =
  //     this.state.cart.findIndex((p) => p.id === product.id) !== -1;
  //   if (isPresent) {
  //     this.incrementQuantity(product.id);
  //   } else {
  //     this.setState((prevState) => ({
  //       cart: prevState.cart.concat({ product, quantity: 1 }),
  //     }));
  //   }
  // };

  // incrementQuantity = (id) => {
  //   this.setState((prevState) => {
  //     let updateCart = prevState.cart.map((p) => {
  //       if (p.id === id) {
  //         return { ...p, quantity: p.quantity + 1 };
  //       }
  //       return p;
  //     });
  //     return { cart: updateCart };
  //   });
  // };

  // decrementQuantity = (id) => {
  //   this.setState((prevState) => {
  //     let updateCart = prevState.cart.map((p) => {
  //       if (p.id === id && p.quantity > 0) {
  //         return { ...p, quantity: p.quantity - 1 };
  //       }
  //       return p;
  //     });
  //     return { cart: updateCart };
  //   });
  // };

  handleCart = () => {
    this.setState((prevState) => ({
      click: !prevState.click,
    }));
  };

  render() {
    return (
      <div className="flex wrap">
        <button
          onClick={this.handleCart}
          className={this.state.click ? "hidden" : "cart-logo"}
        >
          <img src="/static/bag-icon.png" alt="cart" />
          <span>{this.state.count}</span>
        </button>
        {this.props.item.map((product, i) => (
          <div key={i} className="productBox flex-25">
            <figure className="width-full">
              <img
                src={`/static/products/${product.sku}_1.jpg`}
                alt={product.title}
                className="width-full"
              />
            </figure>
            <div className="product-details">
              <h2>{product.title}</h2>
              <p>{product.currencyFormat + product.price}</p>
              <button onClick={() => this.handleClick(product)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
        <div className={this.state.click ? "cart-details" : "hidden"}>
          <div className="flex">
            <div className="center">
              <img src="/static/bag-icon.png" alt="cart" />
              <h2>Cart</h2>
            </div>
            <img
              src="/static/sprite_delete-icon.png"
              alt="cross"
              onClick={this.handleCart}
              className="cross"
            />
          </div>
          {this.state.cart.map((item) => (
            <div key={item.id} className="flex">
              <figure className="flex-10">
                <img
                  src={`/static/products/${item.sku}_2.jpg`}
                  alt="product"
                  className="width-full"
                />
              </figure>
              <div className="flex-70">
                <h3>{item.title}</h3>
                {/* <p>{item.quantity} no.</p>
                <span onClick={() => this.incrementQuantity(item.id)}>+</span>
                <span onClick={() => this.decrementQuantity(item.id)}>-</span> */}
              </div>
              <h4 className="flex-15">
                {item.currencyFormat} {item.price}
              </h4>
            </div>
          ))}
          <div className="flex">
            <h3>SubTotal: </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
