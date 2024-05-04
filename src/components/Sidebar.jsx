import { useState } from "react";
import {
  CiCirclePlus,
  CiSearch,
  CiCalendar,
  CiUser,
  CiHashtag,
} from "react-icons/ci";
import { VscInbox } from "react-icons/vsc";

const Sidebar = ({Toggle}) => {
  const [open, setOpen] = useState(true);
  
  const Menus = [
    { title: "Add Task", icons: <CiCirclePlus />, color: "#DC4A3E", onClick:Toggle },
    { title: "Search", icons: <CiSearch /> },
    { title: "Inbox", icons: <VscInbox /> },
    { title: "Upcoming", icons: <CiCalendar /> },
    { title: "My Projects", icons: "", gap: true, color: "red" },
    { title: "Fitness", icons: <CiHashtag />, logoColor: "yellow" },
    { title: "Groceries", icons: <CiHashtag />, logoColor: "red" },
    { title: "Appointments", icons: <CiHashtag />, logoColor: "blue" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-[#FDFBF6] h-screen p-5  pt-8 relative duration-300`}
      >
        <span
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          ◀
        </span>
        <div className="flex gap-x-4 items-center">
          <CiUser
            className={`text-3xl font-bold cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            User
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-red-100 text-black text-sm items-center gap-x-2 font-semibold hover:text-red-500
              ${Menu.gap ? "mt-9" : ""} ${index === 0 && "bg-light-white"}`}
            >
              <span
                className={`text-xl font-extrabold ${
                  Menu.color ? "text-red-500" : ""
                }`}
                style={{ color: Menu.logoColor || Menu.color }}
              >
                {Menu.icons}
              </span>
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-xl font-semibold ${
                  Menu.color ? "text-red-500" : ""
                }`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Todo's go here</h1>
      </div>
    </div>
  );
};

export default Sidebar;
