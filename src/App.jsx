import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const addTask = () => {
    console.log("add task");
    console.log("showModal");
  };
  const [showModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!showModal);
  };
  return (
    <div>
      <h1>made some changes</h1>
      <Modal showModal={showModal} toggleModal={toggleModal} />
      <button
        className="w-[100px] bg-blue-500 text-white rounded-md "
        onClick={toggleModal}
      >
        New task
      </button>
    </div>
  );
}

export default App;
