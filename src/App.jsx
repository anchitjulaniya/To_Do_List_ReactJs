import Modal from "./component/Modal"
import { useState } from "react";


function App() {

  const addTask = ()=>{
    console.log("add task");
    console.log("showModal");
  }
    const [showModal, setModal] = useState(false);

    const toggleModal = ()=>{
        setModal(!showModal)
    }
  return (
        <div>
          
            <Modal showModal={showModal} toggleModal={toggleModal}/>
            <button className="w-[100px] bg-blue-500 text-white rounded-md " onClick={toggleModal}>New task</button>

        </div>
  )
}

export default App