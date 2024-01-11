import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import Step1 from "./forms/Step1";
import Step2 from "./forms/Step2";
import Step3 from "./forms/Step3";
import Step4 from "./forms/Step4";
import Step5 from "./forms/Step5";
import Step6 from "./forms/Step6";
import Step7 from "./forms/Step7";

const MultiForm = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    acct_Type: "",
    company_Size: "",
    no_of_Person: "",
    solution_Type: "",
    hear_abt_us: "",
    invite_People: [],
    space_Name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    //registration logic here
    console.log("Form submitted:", formData);
    closeModal(formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} />;
      case 3:
        return <Step3 formData={formData} handleChange={handleChange} />;
      case 4:
        return <Step4 formData={formData} handleChange={handleChange} />;
      case 5:
        return <Step5 formData={formData} handleChange={handleChange} />;
      case 6:
        return <Step6 formData={formData} handleChange={handleChange} />;
      case 7:
        return <Step7 formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-700 bg-opacity-60 backdrop-blur-sm z-50">
      <div className="bg-white p-8 rounded-lg w-[70%] mx-auto h-[90%]">
        <div className="text-2xl font-semibold mb-4 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src={Logo}
              alt="imgLogo"
              className="w-16 rounded cursor-pointer block float-left"
            />
            <h1 className="font-black text-2xl">Click</h1>
          </div>
          <span>Welcome, Joshua!</span>
        </div>

        <div className="w-full h-[70%]">{renderStep()}</div>

        <footer className="w-full mx-auto flex-col justify-center items-center pt-7">
          <div className="relative mt-2 h-2">
            <div className="flex h-2 overflow-hidden text-xs bg-gray-200 rounded">
              <div
                style={{ width: `${((step - 1) / 7) * 100}%` }}
                className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-gray-300 px-12 py-4 rounded-md"
              >
                Back
              </button>
            )}
            {step < 7 ? (
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white px-12 py-4 rounded-md"
              >
                Next
              </button>
            ) : (
              <button className="bg-green-500 text-white px-12 py-4 rounded-md">
                Submit
              </button>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MultiForm;
