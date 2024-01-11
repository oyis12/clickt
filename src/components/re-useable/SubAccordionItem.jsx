import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { RiMoreLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import Button from "./Button";
const SubAccordionItem = ({ title, stage, children }) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleSubAccordion = (title) => {
    setIsOpen(!isOpen);
    setIsOpen(title === isOpen ? null : title);
  };

  return (
    <div className=" mb-2 mb-4px-[40px] w-full  mx-auto py-2">
      <div className="flex float-left items-center gap-2 w-[100%] mx-auto">
        <BiPlay
          size={35}
          onClick={() => toggleSubAccordion(title)}
          className={`text-xl cursor-pointer hover:bg-slate-100 rounded-md p-2 ${
            isOpen === title ? "transform rotate-[90deg] duration-500" : ""
          }`}
        />
        <Button title="In Progress" />
        <div className="p-2 cursor-pointer text-sm font-semibold">{title}</div>
        <RiMoreLine
          className="text-2xl cursor-pointer hover:bg-slate-100 rounded-md p-2"
          size={35}
        />
        <div className="flex text-sm font-semibold  hover:bg-slate-100 rounded-md p-2 cursor-pointer">
          <GoPlus size={20} className="text-2xl cursor-pointer" />
          <span>Add task</span>
        </div>
      </div>
      <section className="mt-12 w-[96%] mx-auto">
        {isOpen && <div className="p-2">{children}</div>}
      </section>
    </div>
  );
};

export default SubAccordionItem;
