import React from "react";

class Controlled extends React.Component {
  constructor() {
    super();
    this.state = {
      shipping: {
        address: "",
        zip: "",
        city: "",
        country: "",
        error: {
          address: "",
        },
      },
      billing: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      isSame: false,
    };
  }

  handleCheckbox = () => {
    this.setState((prevState) => ({
      isSame: !prevState.isSame,
    }));
  };

  handleShippingInput = (event) => {
    let { error } = this.state.shipping;
    let { name, value } = event.target;

    this.state.shipping.error.address =
      value.length < 8 ? "You need to enter at-least 8 characters" : "";

    this.setState((prevState) => ({
      error,
      shipping: { ...prevState.shipping, [name]: value },
    }));
  };

  render() {
    const { shipping, billing, isSame } = this.state;
    const billingData = isSame ? shipping : billing;
    return (
      <div className="flex">
        <div className="box flex-45">
          <h2>Shipping Address</h2>
          <form action="post">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={shipping.address}
              onChange={this.handleShippingInput}
            />
            <span>{shipping.error.address}</span>

            <label htmlFor="zip">ZIP/Postal Code</label>
            <input
              type="text"
              name="zip"
              id="zip"
              value={shipping.zip}
              onChange={this.handleShippingInput}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={shipping.city}
              onChange={this.handleShippingInput}
            />

            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              value={shipping.country}
              onChange={this.handleShippingInput}
            />
          </form>
        </div>
        <div className="box flex-45">
          <h2>Billing Address</h2>
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onChange={this.handleCheckbox}
            />
            <label htmlFor="checkbox">Same as the Shipping Address?</label>
          </div>
          <form action="post">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={billingData.address}
            />

            <label htmlFor="zip">ZIP/Postal Code</label>
            <input type="text" name="zip" id="zip" value={billingData.zip} />

            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" value={billingData.city} />

            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              value={billingData.country}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Controlled;
