import { BsListUl, BsSearch } from "react-icons/bs";
import { TbClockPlay } from "react-icons/tb";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { LuGanttChart } from "react-icons/lu";
import { CiViewTable } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoIosMore } from "react-icons/io";

const TopNav = () => {
  return (
    <div className="fixed top-0 w-[-webkit-fill-available] z-100 bg-white">
      <div className="flex justify-between items-center w-full px-4 h-12 py-2 bg-light-white">
        <div>
          <ul className="flex items-center justify-between gap-1 px-4">
            <li className="py-1 px-6 inline-flex gap-2 border-r-2">
              <span className="text-2xl">
                <TbClockPlay size={25} />
              </span>
              <span className="text-base font-medium">Project</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-2 border-r-2">
              <span className="text-2xl">
                <BsListUl size={25} />
              </span>
              <span className="text-base font-medium">List</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-2 border-r-2">
              <span className="text-2xl">
                <HiOutlineClipboardDocument size={25} />
              </span>
              <span className="text-base font-medium">Board</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-2 border-r-2">
              <span className="text-2xl">
                <SlCalender />
              </span>
              <span className="text-base font-medium">Calender</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-2 border-r-2">
              <span className="text-2xl">
                <LuGanttChart size={25} />
              </span>
              <span className="text-base font-medium">Gant</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-2 border-r-2">
              <span className="text-2xl">
                <CiViewTable size={25} />
              </span>
              <span className="text-base font-medium">Table</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-2">
              <span className="text-2xl">
                <GoPlus size={25} />
              </span>
              <span className="text-base font-medium">View</span>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border"
          >
            Automations
          </button>
          <button
            type="button"
            className="focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border"
          >
            Share
          </button>
        </div>
      </div>
      {/* second nav */}
      <div className="flex justify-between items-center w-full h-10 px-4 border-2">
        <div className="flex items-center bg-light-white mt-3 mb-3 px-4 py-2 border-r-2 border-0">
          <BsSearch className="text-black text-lg block float-left cursor-pointer mr-2" />
          <input
            type={"search"}
            placeholder="Search tasks...."
            className="text-base bg-transparent w-full text-black focus:outline-none"
          />
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex items-center justify-between gap-1 px-2">
            <li className="py-1 px-6 inline-flex gap-1 cursor-pointer">
              <span className="text-xl">
                <TbClockPlay size={20} />
              </span>
              <span className="text-sm font-medium">Filter</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-1 cursor-pointer">
              <span className="text-xl">
                <BsListUl size={20} />
              </span>
              <span className="text-sm font-medium">Group by: Status</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-1 cursor-pointer">
              <span className="text-xl">
                <HiOutlineClipboardDocument size={20} />
              </span>
              <span className="text-sm font-medium">Subtasks</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-1 cursor-pointer">
              <span className="text-xl">
                <SlCalender />
              </span>
              <span className="text-sm font-medium">Me</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-1 cursor-pointer">
              <span className="text-2xl">
                <LuGanttChart size={20} />
              </span>
              <span className="text-sm font-medium">Assignees</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-1 cursor-pointer">
              <span className="text-xl">
                <GoPlus size={20} />
              </span>
              <span className="text-sm font-medium">Shows</span>
            </li>
            <li className="py-1 px-6 inline-flex gap-1 cursor-pointer">
              <span className="text-xl">
                <IoIosMore size={20} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
