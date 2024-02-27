 {/*    LANDING      */}
 <div className={`h-96 absolute top-0 w-full -z-10 transition-transform duration-1000 ${isLoaded ? "translate-y-0" : "-translate-y-full"}`}>
 <img
   src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   className=" w-full h-full object-cover"
   alt="graduationcap"
 />
 <div
   className="absolute inset-0"
   style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
 ></div>
 <div className="absolute inset-0 flex flex-col justify-center items-center">
   <div className="container mx-auto text-center">
     <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white">
       Divine Consultancy
     </h1>
     <p className="text-lg md:text-xl lg:text-2xl mb-8  text-white">
       "Unlock Your Academic Potential with Divine Guidance"
     </p>
     <button className="bg-green-400 text-white py-2 px-6 rounded-full hover:bg-white hover:text-green-400">
       Contact Us
     </button>
   </div>
 </div>
</div>
{/*    LANDING      */}

{/*    ABOUT      */}
<div className={`m-5 shadow-lg h-52 relative top-80 transition-transform duration-1000 ${isLoaded ? "translate-y-0" : "translate-y-full"}`}>
 <div className="row flex flex-row justify-between items-center">
   <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-110 transition-transform duration-300 ease-in-out text-center mt-10 ">
     <div className="text-4xl flex justify-center ">
     <FaGraduationCap />
     </div>
     <div className="p-2 m-2">
       <p className="font-bold">20+ Ug courses</p>
     </div>
     </div>
   <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-110 transition-transform duration-300 ease-in-out text-center mt-10">
     <div className="text-4xl flex justify-center">
     <IoIosBookmarks />
     </div>
     <div className="p-2 m-2">
       <p className="font-bold">15+ Ug courses</p>
     </div>
     </div>
   <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-110 transition-transform duration-300 ease-in-out text-center mt-10">
     <div className="text-4xl flex justify-center">
     <FaArrowsDownToPeople />
     </div>
     <div className="p-2 m-2">
       <p className="font-bold">100+ Happy Families</p>
     </div>
     </div>
 </div>
</div>

{/*    ABOUT      */}


import { FaGraduationCap } from "react-icons/fa6";
import { IoIosBookmarks } from "react-icons/io";
import { FaArrowsDownToPeople } from "react-icons/fa6";