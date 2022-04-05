import React from "react";

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 2 UI
    return (
      <div className="step2">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={this.props.message}
          onChange={this.props.handleChange}
        ></textarea>
      </div>
    );
  }
}

export default Step2;
