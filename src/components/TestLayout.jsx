import { useState } from "react";
import "../styles/scrollbar.css";
import Logo from "../assets/img/logo.png";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { SiPowerpages } from "react-icons/si";
import { CiCircleMore } from "react-icons/ci";
import { MdWorkspacesFilled } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";

const Layout = ({ children }) => {
  const sideMenu = [
    { title: "Home", icon: <FaHome /> },
    { title: "Notification", icon: <IoNotificationsSharp /> },
    { title: "Pages", spacing: true, icon: <SiPowerpages /> },
    {
      title: "Show more",
      icon: <CiCircleMore />,
      submenu: true,
      submenuItems: [
        { title: "Menue 1" },
        { title: "Menue 2" },
        { title: "Menue 3" },
      ],
    },
    {
      title: "Favourite",
      submenu: true,
      submenuItems: [
        { title: "Menue 1" },
        { title: "Menue 2" },
        { title: "Menue 3" },
      ],
    },
    {
      title: "Spaces",
      icon: <MdWorkspacesFilled />,
      submenu: true,
      submenuItems: [
        { title: "Menue 1" },
        { title: "Menue 2" },
        { title: "Menue 3" },
      ],
    },
    {
      title: "Dashboards",
      submenu: true,
      submenuItems: [
        { title: "Menue 1" },
        { title: "Menue 2" },
        { title: "Menue 3" },
      ],
    },
    {
      title: "Docs",
      icon: <SiGoogledocs />,
      submenu: true,
      submenuItems: [
        { title: "Menue 1" },
        { title: "Menue 2" },
        { title: "Menue 3" },
      ],
    },
  ];

  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <div className="bg-gray-800 text-white w-1/5 p-4 fixed h-full"> */}
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-1/5" : "w-20"
        } duration-300 fixed h-full`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 cursor-pointer border border-dark-purple z-40 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-2 items-center -mt-1">
          <img
            src={Logo}
            alt="rework"
            className={`w-16 rounded cursor-pointer block float-left duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`font-black text-white text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Click
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            !open ? "px-2.5" : "px-4"
          } px-4 py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        {/* <h2 className="text-2xl font-bold mb-4">Sidebar</h2> */}
        {/* Add your sidebar content here */}
        <div className="h-screen ::-webkit-scrollbar">
          <ul className="pt-2">
            {sideMenu.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex
                 items-center gap-x-4 cursor-pointer 
                 p-2 hover:bg-light-white
                 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}
                 `}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    />
                  )}
                </li>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex
                     items-center gap-x-4 cursor-pointer px-5 
                     p-2 hover:bg-light-white
                     rounded-md "
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      {/* <div className="flex-1 ml-1/5 p-4 w-4/5"> */}
      <div className={`flex-1 ml-1/5 p-4 w-4/5 ${open ? "w-4/5" : "w-"}`}>
        {/* Top Navigation Bar */}
        <div
          className={`bg-dark-purple z-0 text-white p-4 fixed top-0 right-0 ${
            !open ? "w-[95.4%]" : "w-4/5"
          }`}
        >
          <h2 className="text-2xl font-bold">Top Nav</h2>
          {/* Add your top navigation content here */}
        </div>

        {/* Main Content */}
      </div>
      <div
        className={`mt-16 w-4/5 top-0 right-0 max-h-screen ${
          !open ? "w-[95.4%] duration-300" : "w-4/5"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
