import { useState } from "react";

const Step5 = () => {
  const [select, setSelect] = useState(false);

  const itemSelect = (index) => {
    setSelect(!select);
  };

  return (
    <div className="items-center">
      <div className="w-[70%] mx-auto">
        <h1 className="text-5xl font-bold text-center p-2">
          How did you hear about us?
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
              Search engine (Google,Bing, etc.)
            </div>

            <div
              className={`text-md cursor-pointer border-2 font-bold p-4  rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Billboard{" "}
            </div>

            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 text-center rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Friend / Colleague{" "}
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 px-10 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Podcast / Radio{" "}
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
              Tv / Streaming (Hulu, NBC etc.)
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Facebook / Instagram
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
              TikTok
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Youtube
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              LinkedIn
            </div>
            <div
              className={`text-md cursor-pointer border-2 font-bold p-4 rounded-lg shadow-sm ${
                select === true
                  ? "bg-blue-700 text-white"
                  : "bg-transparent text-gray-800"
              }`}
              onClick={itemSelect}
            >
              Other
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

export default Step5;
