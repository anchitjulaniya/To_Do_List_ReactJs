// import React from "react";
import PropType from 'prop-types'

const Modal = ({showModal, toggleModal, createTask, taskInputValue, labelInputValue, labelValue, taskValue}) => {
    console.log(showModal);
  return (
    <div
      className={`fixed top-0 z-50 left-0 flex items-center justify-center duration-700 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.7)] ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="w-[440px] h-[277px] rounded-lg p-8 bg-white text-black">
        <h1 className='mb-2 font-semibold text-blue-600'>New Task</h1>
        
        <div className="w-full px-3 mb-6 flex gap-3 items-center">
            <label className="w-[60px] block tracking-wide text-gray-700 text-lg font-bold mb-2" >
                Label :
            </label>
            <input onChange={labelInputValue} className="appearance-none block bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  h-[35px] w-[150px]" id="grid-first-name" type="text" placeholder="Gym, Work, etc" value={labelValue}/>
            
        </div>
        <div className="w-full px-3 mb-6 flex gap-3 items-center">
            <label  className="w-[60px] block tracking-wide text-gray-700 text-lg font-bold mb-2" >
                Task :
            </label>
            <input onChange={taskInputValue} className="appearance-none block bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  h-[35px] w-[300px]" id="grid-first-name" type="text" placeholder="Going to vegetable market" value={taskValue} />
            
        </div>

        <div className='flex justify-between px-10'>
            <button className='px-4  text-white font-bold bg-red-500 rounded-md' onClick={toggleModal}>Cancel</button>
            {/* <button onClick={createTask} className='px-4  text-white font-bold bg-green-500  rounded-md'>Create</button> */}
            <button onClick={createTask} 
                className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
              >
                Add Task
                <span
                  className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                ></span>
                <span
                  className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                ></span>
                <span
                  className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
                ></span>
                <span
                  className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                  >New Task</span
                >
              </button>

        </div>
        

      </div>
      <button onClick={toggleModal}>close</button>
    </div>
  );
};

Modal.propTypes = {
        showModal: PropType.bool,
        toggleModal: PropType.func,
        createTask: PropType.func,
        taskInputValue: PropType.func,
        labelInputValue: PropType.func,
        labelValue: PropType.string,
        taskValue: PropType.string
}

export default Modal;
