import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class MasterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1, // Default is Step 1
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      address: "",
      message: "",
    };
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);
    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `${
        this.state.firstName + " " + this.state.lastName
      } Registered Successfully`
    );
  };

  render() {
    return (
      <div className="flex box">
        <figure className="flex-30">
          <img src="/cover.jpg" alt="cover" />
        </figure>
        <div className="flex-67 text-box">
          <div className="header">
            <span
              className={
                this.state.currentStep === 1 ? "active-no" : "header-no"
              }
            >
              1
            </span>{" "}
            <span>Sign Up</span>
            <span
              className={
                this.state.currentStep === 2 ? "active-no" : "header-no"
              }
            >
              2
            </span>{" "}
            <span>Message</span>
            <span
              className={
                this.state.currentStep === 3 ? "active-no" : "header-no"
              }
            >
              3
            </span>{" "}
            <span>Checkbox</span>
          </div>
          <form onSubmit={this.handleSubmit}>
            <p className="step">Step {this.state.currentStep}/3</p>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              dob={this.state.dob}
              email={this.state.email}
              address={this.state.address}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              message={this.state.message}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
            />
            <div className="flex">
              {this.previousButton}
              {this.nextButton}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MasterForm;
