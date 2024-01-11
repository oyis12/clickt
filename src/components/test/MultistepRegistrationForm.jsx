// MultistepRegistrationForm.js

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const MultistepRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize your form data fields here
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // Add more fields as needed
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne formData={formData} handleChange={handleChange} />;
      case 2:
        return <StepTwo formData={formData} handleChange={handleChange} />;
      case 3:
        return <StepThree formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">Step {step}</div>
          <div className="text-sm text-gray-600">
            Progress: {((step - 1) / 2) * 100}%
          </div>
        </div>
        <div className="relative mt-3">
          <div className="flex h-2 overflow-hidden text-xs bg-gray-200 rounded">
            <div
              style={{ width: `${((step - 1) / 2) * 100}%` }}
              className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
      {renderStep()}
      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="bg-gray-300 px-4 py-2 rounded-md"
          >
            Previous
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={nextStep}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        ) : (
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultistepRegistrationForm;
