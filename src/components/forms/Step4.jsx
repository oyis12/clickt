import { useState } from "react";

const Step4 = () => {
  const [select, setSelect] = useState(false);

  const itemSelect = (index) => {
    setSelect(!select);
  };

  return (
    <div className="items-center">
      <div className="w-[70%] mx-auto">
        <h1 className="text-5xl font-bold text-center p-2">
          Which solution would you like to start with?
        </h1>
      </div>
      <section className="w-[70%] mx-auto pt-10 flex flex-col justify-center items-center h-60">
        <div className="mt-auto flex justify-center gap-4">
          <div className="grid grid-cols-6 gap-3">
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4  rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Marketing{" "}
            </div>

            <div
              className={`text-md cursor-pointer border-2 font-bold p-4  rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Operations{" "}
            </div>

            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 text-center rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Creative & Design{" "}
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 px-10 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Support{" "}
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 px-10 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              IT{" "}
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Finance & Accounting{" "}
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Sales & CRM{" "}
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              PMO{" "}
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Engineering & Product{" "}
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Professional Services{" "}
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Other{" "}
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center mt-12">
        This will help us customize your onboarding
      </h1>
    </div>
  );
};

export default Step4;
