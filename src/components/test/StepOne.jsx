// StepOne.js

import React from "react";

const StepOne = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
      </label>
    </div>
  );
};

export default StepOne;
