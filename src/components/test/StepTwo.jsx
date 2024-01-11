// StepTwo.js

import React from "react";

const StepTwo = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Step 2</h2>
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
      </label>
    </div>
  );
};

export default StepTwo;
