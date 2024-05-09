import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);

  const [labelValue, setLabelValue] = useState("");

  const [taskValue, setTaskValue] = useState("");

  const [showModal, setModal] = useState(false);

  const [filteredTaskList,setFilteredTaskList] = useState([])

  const color = ["#DC4A3E", "#7d2ae8", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51", "#264653", "#f4a261", "#e76f51", "#264653"]; //length - 10

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

      setFilteredTaskList(taskList)
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

  return (
    <div className="flex">
      <Sidebar toggleModal={toggleModal} setTaskList={setTaskList}
      taskList={taskList}
      setFilteredTaskList={setFilteredTaskList}
      color = {color} 
      />{" "}
      <div className="p-10">
        <Modal

          
          showModal={showModal}
          toggleModal={toggleModal}
          createTask={createTask}
          taskInputValue={taskInputValue}
          labelInputValue={labelInputValue}
          labelValue={labelValue}
          taskValue={taskValue}
        />
        {/* <button
          className="addnew-button bg-blue-500 text-white rounded-md "
          onClick={toggleModal}
        >
          New task
        </button> */}

<div className="w-full h-[80vh] flex justify-center">
          <div id="DisplayContainer " className="mt-[20px]">
          <h1 className="text-xl font-bold py-6 border-b-2 w-full duration-1000">All Task </h1>
          {filteredTaskList.map((task, index) => (
            <div
              key={index}
              className={`
              flex flex-col relative py-6 w-[700px] border-b-2  text-lg`}
            >
              <div className="text-black text-xl font-semibold w-full "><span className="bg-yellow-200">{task.task}</span></div>
              <div className="flex justify-between">
                <p className="text-green-500 text-lg">{task.date}</p>
                <p>{task.time}</p>
                <p className="text-purple-500">{task.label}</p>
              </div>  
              <button className="absolute top-2 right-2 hover:bg-red-200 rounded-md" onClick={() => handleDelete(index)}>❌</button>
              <button
                onClick={() => handleComplete(index)}
                className="px-3 mx-1 bg-black text-white"
              >
                Done
              </button>
              {/* <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleComplete(index)}
                className="mx-1"
                /> */}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
