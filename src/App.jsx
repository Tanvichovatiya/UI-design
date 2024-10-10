import React from "react";
import { IoCartOutline } from "react-icons/io5";
import laptop from '../src/assets/img/1laptop.jpeg';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa6";
import { VscCircleLargeFilled } from "react-icons/vsc";

function App() {
  return (
    <>
   <div className="flex  w-full h-screen ">
     

    <div className="w-[500px] h-[500px] relative right-[-75%] bottom-[20%]   bg-gradient-to-r from-gray-200 to-gray-100 rounded-full">
      <div className="w-[370px] h-[370px] absolute  top-[40%] right-[80%] bottom-[40%]  bg-gradient-to-r from-gray-200 to-gray-100 rounded-full "></div>
      <div className="w-[300px] h-[300px] absolute  top-[69%]   right-[50vw]  bg-gradient-to-r from-gray-200 to-gray-100 rounded-full "></div>

        <div className="absolute top-[25%] w-[90vw] left-[-70vw]">
        <nav className="flex items-center  mt-5 justify-between">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-100 relative rounded-full  ml-5 flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-100 absolute left-[-2px] top-[-20px] rounded-full mt-5  ml-5 "></div>
          <div className="w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-100 absolute left-[20px] top-[-20px] flex flex-nowrap rounded-full mt-5  ml-5 ">          </div>
          <p className="ml-20 text-center  text-black">Three Dots</p>
        </div>
        <p className="text-[18px]">Specs</p>
        <p className="text-[18px]">Products</p>
        <p className="text-[18px]">Contact</p>
        <p className="text-[18px]"><IoCartOutline className="bg-gray-400 w-10 h-10 mr-5 text-[20px] rounded-full"></IoCartOutline></p>
      </nav> 
      </div>

      <h1 className="absolute top-[60%] left-[-60vw] text-[30px]">Laptop For the Future</h1>
      <p className="absolute top-[70%] left-[-60vw] text-[15px] text-gray-500">The new 14 inch bezeless display oferring a 4k display <br></br> with touch screen</p>
      <div className="absolute top-[90%] left-[-60vw] flex gap-5 ">
        <button className="border-2 border-purple-400 py-2 px-3 rounded">14 inch</button>
        <button className="bg-purple-400 px-3 py-2 rounded">ADD to Cart</button>
      </div>

      <img src={laptop} alt="" className="absolute top-[60%] left-[-15vw] w-15 h-15 rounded"/>
      <div className="absolute bottom-[-60px] left-[-10vw] flex items-center gap-2">
        <MdKeyboardArrowLeft className="text-[20px]"/>
        <FaRegCircle className="text-[20px]"/>
        <VscCircleLargeFilled className="text-[20px]"/>
        <VscCircleLargeFilled className="text-[20px]"/>
         <MdOutlineKeyboardArrowRight className="text-[20px]"/> 
      </div>
    </div>
   </div>
 
    
    </>
  );
}

export default App;
