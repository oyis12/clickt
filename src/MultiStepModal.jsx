// MultiStepRegistrationModal.js

import React, { useState } from "react";

const MultiStepModal = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Form submitted:", formData);
    closeModal(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
      <div className="bg-white p-8 rounded-md">
        <div className="text-2xl font-semibold mb-4">
          Multi-Step Registration
        </div>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </>
          )}
          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Previous
              </button>
            )}
            {step < 2 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepModal;
