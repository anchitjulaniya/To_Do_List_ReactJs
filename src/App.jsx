import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);

  const [labelValue, setLabelValue] = useState("");

  const [taskValue, setTaskValue] = useState("");

  const [showModal, setModal] = useState(false);

  const [filteredTaskList, setFilteredTaskList] = useState([]);

  const [currentSec, setCurrentSec] = useState("All Task");

  console.log(currentSec);

  const color = [
    "#DC4A3E",
    "#7d2ae8",
    "#2a9d8f",
    "#e9c46a",
    "#f4a261",
    "#e76f51",
    "#264653",
    "#f4a261",
    "#e76f51",
    "#264653",
  ]; //length - 10

  const createTask = () => {
    if (taskValue.trim() !== "") {
      setTaskList([
        ...taskList,
        {
          label: labelValue,
          task: taskValue,
          isCompleted: false,
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
        },
      ]);

      setFilteredTaskList(taskList);
    }
    toggleModal();
    setLabelValue("");
    setTaskValue("");
  };

  const labelInputValue = (e) => {
    setLabelValue(e.target.value);
    console.log(e.target.value);
  };
  const taskInputValue = (e) => {
    setTaskValue(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    setTaskList(
      localStorage.getItem("taskList")
        ? JSON.parse(localStorage.getItem("taskList"))
        : []
    );

    // setFilteredTaskList(
    //   localStorage.getItem("taskList")
    //     ? JSON.parse(localStorage.getItem("taskList"))
    //     : []
    // );
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const handleDelete = (index) => {
    let filteredArr = taskList.filter((item, idx) => {
      return idx !== index;
    });
    setTaskList(filteredArr);
  };

  const handleComplete = (index) => {
    let filteredArr = taskList.map((item, id) => {
      if (index === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setTaskList(filteredArr);
  };

  const toggleModal = () => {
    setModal(!showModal);
  };

  // if(currentSec === "All Task") ?
  return (
    <div className="flex">
      <Sidebar
        toggleModal={toggleModal}
        setTaskList={setTaskList}
        taskList={taskList}
        setFilteredTaskList={setFilteredTaskList}
        filteredTaskList={filteredTaskList}
        color={color}
        setCurrentSec={setCurrentSec}
        currentSec={currentSec}
      />{" "}
      <div className="p-10 w-full">
        <Modal
          showModal={showModal}
          toggleModal={toggleModal}
          createTask={createTask}
          taskInputValue={taskInputValue}
          labelInputValue={labelInputValue}
          labelValue={labelValue}
          taskValue={taskValue}
        />
        
        <div className="w-[100%] h-[80vh] flex justify-center">
          <div id="DisplayContainer " className="mt-[20px]">
            <h1 className="text-xl font-bold py-6 border-b-2 w-full duration-1000">
              {currentSec}
            </h1>

            {(currentSec === "All Task" ? taskList : filteredTaskList).map(
              (task, index) => (
                <div
                  key={index}
                  className="flex flex-col relative gap-4 py-3 w-[700px] border-b-2 text-lg"
                >
                  <div className="text-black flex items-center gap-4 text-xl  w-full">
                  
                  <div className="dark:bg-black/10">
                    <label className="text-white">
                      <input onChange={()=>{handleComplete(index)}} checked={task.isCompleted} className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6 " type="checkbox" />
                    </label>
                  </div>

                    <span className="">{task.task}</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <p className="text-green-500 w-[200px]">{task.date}</p>
                    <p className="w-[200px]">{task.time}</p>
                    <p className="text-purple-500 w-[250px] text-end text-[20px]">{task.label} <span className={`text-green-500`}>&#35;</span></p>
                  </div>
                  <button
                    className="absolute top-2 right-2 hover:bg-red-200 rounded-md"
                    onClick={() => handleDelete(index)}
                  >
                    ❌
                  </button>
                  
                  {/* <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => handleComplete(index)}
        className="mx-1"
      /> */}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
