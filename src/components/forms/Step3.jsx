import { useState } from "react";

const Step3 = () => {
  const [select, setSelect] = useState(false);

  const itemSelect = (index) => {
    setSelect(!select);
  };

  return (
    <div className="items-center">
      <div className="w-[70%] mx-auto">
        <h1 className="text-5xl font-bold text-center p-2">
          How many people will be working with you?
        </h1>
      </div>
      <section className="w-[70%] mx-auto pt-10 flex flex-col justify-center items-center h-60">
        <div className="mt-auto flex justify-center gap-4">
          <div className="grid grid-cols-3 gap-4">
            <div
              className={`text-xl cursor-pointer border-2 font-bold py-3 px-10 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Just me{" "}
            </div>

            <div
              className={`text-xl cursor-pointer border-2 font-bold py-3 px-10 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              11-25{" "}
            </div>

            <div
              className={`text-xl cursor-pointer border-2 font-bold py-3 px-10 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              26-50{" "}
            </div>
            <div
              className={`text-xl cursor-pointer border-2 font-bold py-3 px-10 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              51-250{" "}
            </div>
            <div
              className={`text-xl cursor-pointer border-2 font-bold py-3 px-10 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              251-500{" "}
            </div>
            <div
              className={`text-xl cursor-pointer border-2 font-bold py-3 px-10 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              501+{" "}
            </div>
            <div
              className={`text-xl cursor-pointer border-2 font-bold py-3 px-10 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              I don't know{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Step3;
