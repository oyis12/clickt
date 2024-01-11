import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { TbBrandStackshare } from "react-icons/tb";
import { CgCircleci } from "react-icons/cg";
import RoundButton from "./RoundButton";

const Task = ({ title, children, label }) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleSubAccordion = (title) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" mb-2 mb-4px-[40px] w-full  mx-auto py-2">
      <div className="flex bg-red-300 w-full">
        <div className="flex float-left items-center gap-2 w-[100%] mx-auto group">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600 h-4 w-4 rounded-md cursor-pointer"
          />

          <BiPlay
            size={35}
            onClick={() => toggleSubAccordion(title)}
            className={`text-xl cursor-pointer hover:bg-slate-100 rounded-md p-2 ${
              isOpen === !null ? "transform rotate-[90deg] duration-500" : ""
            }`}
          />
          <RoundButton label="">
            <CgCircleci />
          </RoundButton>
          <div className="p-2 cursor-pointer text-sm font-semibold">
            {title}
          </div>
          <TbBrandStackshare
            className="text-2xl cursor-pointer hover:bg-slate-100 rounded-md p-2"
            size={30}
          />
        </div>
      </div>
      <section className="mt-12 w-[96%] mx-auto bg-green-300">
        {isOpen && <div className="p-2">{children}</div>}
      </section>
    </div>
  );
};

export default Task;
