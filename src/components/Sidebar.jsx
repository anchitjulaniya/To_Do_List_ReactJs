import { useState, useEffect } from "react";
import { CiUser, CiHashtag } from "react-icons/ci";
import { GrCompliance } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import {
  MdOutlinePendingActions,
  MdOutlineAddCircleOutline,
  MdUpcoming,
} from "react-icons/md";

const Sidebar = ({
  toggleModal,
  filteredTaskList,
  setTaskList,
  taskList,
  setFilteredTaskList,
  color,
  setCurrentSec,
  currentSec
}) => {
  const [open, setOpen] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  const Menus = [
    {
      title: "Add Task",
      icons: <MdOutlineAddCircleOutline />,
      color: "#DC4A3E",
    },
    { title: "Search", icons: <IoSearch /> },
    { title: "Completed", icons: <GrCompliance /> },
    { title: "Pending", icons: <MdOutlinePendingActions /> },
    { title: "All Task", icons: <MdUpcoming /> },
    { title: "Label", icons: "", gap: true, color: "blue" },
    // { title: "Fitness", icons: <CiHashtag />, logoColor: "yellow" },
    // { title: "Groceries", icons: <CiHashtag />, logoColor: "red" },
    // { title: "Appointments", icons: <CiHashtag />, logoColor: "blue" },
    // {title : taskList.label , icons:<CiHashtag />, logoColor: "red"}
  ];

  const currentSectionstyle = {
    textColor :"text-red-500",
    backGroundColor:"bg-red-100"
  }
  const handleAddTaskClick = () => {
    toggleModal();
  };

  const handleCompleteClick = () => {
    console.log("clicked completed");
    setCurrentSec("complete")
    const completedTasks = taskList.filter((item) => item.isCompleted);
    setFilteredTaskList(completedTasks);
  };

  const handlePendingClick = () => {
    // console.log();
    setCurrentSec("pending")
    const pendingTasks = taskList.filter((item) => !item.isCompleted);
    setFilteredTaskList(pendingTasks);
  };

  const handleAllTaskClick = () => {
    setCurrentSec("All Task")
    setFilteredTaskList(taskList);
  };

  // useEffect(() => {
  //   handleAllTaskClick();
  // },[])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMenuVisible(true);
    }, 400);

    return () => clearTimeout(timeout);
  }, [open]);

  const handleLableSort = (idx) => {
    console.log("label clicked");
  }

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
          {menuVisible &&
            Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-red-100 text-black text-sm items-center gap-x-2 font-semibold hover:text-red-500 
                ${Menu.gap ? "mt-9" : ""} ${index === 0 && "bg-light-white"}`}
                onClick={() => {
                  if (Menu.title === "Add Task") {
                    handleAddTaskClick();
                  } else if (Menu.title === "Completed") {
                    handleCompleteClick();
                  } else if (Menu.title === "Pending") {
                    handlePendingClick();
                  } else if (Menu.title === "All Task") {
                    handleAllTaskClick();
                  }
                }}
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
                  } origin-left duration-100 text-xl font-semibold transition-all  ${
                    Menu.color ? "text-red-500" : ""
                  }`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          {menuVisible && taskList.map((task, idx) => (
            <li
              key={idx}
              className="flex  rounded-md p-2 cursor-pointer hover:bg-red-100 text-black text-sm items-center gap-x-2 font-semibold hover:text-red-500"
            >
              
              <CiHashtag className="text-xl font-extrabold text-red-500"/>{" "}
              <span className={`${
                    !open && "hidden"
                  } origin-left duration-100 text-xl font-semibold transition-all`}
                  onClick={() => handleLableSort(idx)}
                  >{task.label} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
