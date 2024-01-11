import React, { useState } from "react";
import { RiMoreLine } from "react-icons/ri";
import { BsFilterLeft } from "react-icons/bs";
import { MdOutlineInvertColors } from "react-icons/md";
import { CiUser, CiFlag1, CiCalendarDate } from "react-icons/ci";
// import { PiGooglePlayLogoBold } from "react-icons/pi";
import { BiPlay } from "react-icons/bi";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (title) => {
    setIsOpen(!isOpen);
    setIsOpen(title === isOpen ? null : title);
  };

  return (
    <div className="w-full pb-8">
      <div className="mb-4px-[40px] w-[90%]  mx-auto border-2 rounded-md mt-5">
        <section className="w-[95%] mx-auto">
          <span className="flex gap-2">
            Projects / <p>{title}</p>
          </span>
          <header className="w-full flex justify-between items-center py-3 mb-4">
            <div className="flex gap-4 justify-between items-center float-left">
              <BiPlay
                className={`text-xl cursor-pointer hover:bg-slate-100 rounded-md p-2${
                  isOpen === title
                    ? "transform rotate-[90deg] duration-500"
                    : ""
                }`}
                onClick={() => toggleAccordion(title)}
                size={33}
              />
              <span className="font-bold">{title}</span>
              <RiMoreLine className="text-2xl cursor-pointer" />
              <div className="flex gap-4 justify-between items-center float-left opacity-0 hover:opacity-100 duration-500 cursor-pointer">
                <BsFilterLeft className="text-xl" />
                <MdOutlineInvertColors className="text-xl" />
                <CiUser className="text-2xl" />
                <CiFlag1 className="text-xl" />
                <CiCalendarDate className="text-xl" />
              </div>
            </div>
          </header>
        </section>
        <section
          className={`w-[90%] mx-auto ${
            isOpen === title ? "py-5 duration-500" : "py-5 hidden duration-500"
          }`}
        >
          {isOpen && <div className="p-2">{children}</div>}
        </section>
      </div>
    </div>
  );
};

export default AccordionItem;
