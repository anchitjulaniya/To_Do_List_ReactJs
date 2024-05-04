// import React from "react";
import PropType from 'prop-types'

const Modal = ({showModal, toggleModal}) => {
    console.log(showModal);
  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center duration-700 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.7)] ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="w-[440px] h-[277px] rounded-lg p-8 bg-white text-black">
        <h1 className='mb-2 text-blue-600'>New Task</h1>
        
        <div className="w-full px-3 mb-6 flex gap-3 items-center">
            <label className="w-[60px] block tracking-wide text-gray-700 text-lg font-bold mb-2" >
                Label :
            </label>
            <input className="appearance-none block bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  h-[35px] w-[150px]" id="grid-first-name" type="text" placeholder="Gym, Work, etc" />
            
        </div>
        <div className="w-full px-3 mb-6 flex gap-3 items-center">
            <label className="w-[60px] block tracking-wide text-gray-700 text-lg font-bold mb-2" >
                Task :
            </label>
            <input className="appearance-none block bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  h-[35px] w-[300px]" id="grid-first-name" type="text" placeholder="Going to vegetable market" />
            
        </div>

        <div className='flex justify-between px-10'>
            <button className='px-4 border border-black rounded-md' onClick={toggleModal}>Cancel</button>
            <button className='px-4 border border-black rounded-md' onClick={addTask}>Create</button>
        </div>
        

      </div>
      <button onClick={toggleModal}>close</button>
    </div>
  );
};

Modal.propTypes = {
        showModal: PropType.bool,
        toggleModal: PropType.func
}

export default Modal;
