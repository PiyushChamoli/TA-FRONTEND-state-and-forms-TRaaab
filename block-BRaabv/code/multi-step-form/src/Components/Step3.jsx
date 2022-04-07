import React from "react";

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 3 UI
    return (
      <div className="step3">
        <label className="contain">
          I want to add this option
          <input type="checkbox" id="check" name="check" value="Add" />
          <span className="checkmark"></span>
        </label>
        <label className="contain">
          Let me click on the checkbox and choose some cool stuff
          <input type="checkbox" id="check" name="check" value="Click" />
          <span className="checkmark"></span>
        </label>
        <input type="submit" value="Submit" className="submit-btn" />
      </div>
    );
  }
}

export default Step3;
