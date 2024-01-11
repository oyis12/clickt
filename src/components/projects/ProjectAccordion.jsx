// import { useState } from "react";
import { RiMoreLine } from "react-icons/ri";
import { BsFilterLeft } from "react-icons/bs";
import { MdOutlineInvertColors } from "react-icons/md";
import { CiUser, CiFlag1, CiCalendarDate } from "react-icons/ci";
// import { PiGooglePlayLogoBold } from "react-icons/pi";
import { BiPlay } from "react-icons/bi";
import ProjectItems from "./ProjectItems";

import React, { useState } from "react";

const ProjectAccordion = () => {
  const items = [
    {
      title: "Project 1",
      content: "this is the item",
    },
    {
      title: "Project 2",
      content: "this is the item",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full pb-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-4px-[40px] w-[90%]  mx-auto border-2 rounded-md mt-5"
        >
          <section className="w-[95%] mx-auto">
            <span className="flex gap-2">
              Projects / <p>{item.title}</p>
            </span>
            <header className="w-full flex justify-between items-center py-3 mb-4">
              <div className="flex gap-4 justify-between items-center float-left">
                <BiPlay
                  onClick={() => handleClick(index)}
                  className={`text-xl cursor-pointer${
                    activeIndex === index ? "transform rotate-90deg" : ""
                  }`}
                />
                <span className="font-bold">{item.title}</span>
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
              activeIndex === index ? "py-5" : "py-5 hidden"
            }`}
          >
            {activeIndex === index && <ProjectItems data={item.content} />}
          </section>
        </div>
      ))}
    </div>
  );
};

export default ProjectAccordion;
