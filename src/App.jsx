import Modal from "./components/Modal";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const addTask = () => {
    console.log("add task");
    // Call your showModal function or any other logic here
  };
  
  const [showModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!showModal);
  };

  return (
    <div className="flex">
      <Sidebar Toggle={addTask} /> {/* Pass addTask function instead of toggleModal */}
      <div>
        <Modal showModal={showModal} toggleModal={toggleModal} />
        <button
          className="w-[100px] bg-blue-500 text-white rounded-md "
          onClick={toggleModal}
        >
          New task
        </button>
      </div>
    </div>
  );
}

export default App;
