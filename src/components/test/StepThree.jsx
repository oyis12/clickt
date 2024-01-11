// StepThree.js

import React from "react";

const StepThree = ({ formData }) => {
  return (
    <div>
      <h2>Step 3</h2>
      <p>Review your information:</p>
      <p>
        <strong>First Name:</strong> {formData.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {formData.lastName}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Password:</strong> {formData.password}
      </p>
    </div>
  );
};

export default StepThree;
