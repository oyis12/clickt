import { useState } from "react";
import SetUpInputs from "../re-useable/SetUpInputs";

const Step1 = () => {
  const [select, setSelect] = useState(false);

  const itemSelect = (index) => {
    setSelect(!select);
  };

  return (
    <div className="items-center">
      <div className="w-[70%] mx-auto">
        <h1 className="text-6xl font-bold text-center p-2">
          What would you like to use Click for?
        </h1>
      </div>
      <section className="w-[70%] mx-auto pt-10 flex flex-col justify-center items-center h-60">
        <div className="mt-auto flex justify-center gap-4">
          <SetUpInputs label="Work" onClick={itemSelect} select={select} />
          <SetUpInputs label="Personal" onClick={itemSelect} select={select} />
          <SetUpInputs label="School" onClick={itemSelect} select={select} />
        </div>
      </section>
    </div>
  );
};

export default Step1;
