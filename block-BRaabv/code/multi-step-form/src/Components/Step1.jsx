import React from "react";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="flex step1">
        <div className="flex-48">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={this.props.firstName}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="flex-48">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={this.props.lastName}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="flex-48">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={this.props.bob}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="flex-48">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="width-full">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={this.props.address}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Step1;
