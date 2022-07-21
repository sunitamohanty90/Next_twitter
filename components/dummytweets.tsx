import {
    ChatIcon,
    HeartIcon,
    RefreshIcon,
    UploadIcon
    
} from "@heroicons/react/outline";


function AddTweets() {

    return(
        <>
        <div className=" mt-3 ml-3 relative ">
            
                  <img src="/profile1.webp" className="w-12 h-12  rounded-full "/>
            <div className="ml-16 absolute top-0 insert-x-0 sm:w-auto w-[80%]  ">
               <div className="inline-flex  sm:space-x-1  w-[60%] sm:w-auto ">
                     <p className="font-bold truncate">Srimantini Mohanty</p>
                     <p className="text-gray-400 truncate"> @seema789425 </p>
                     <span className="text-gray-400 truncate">.Feb 24</span>
               </div>
                     <p className="">53 years ago, we set foot on our very own natural satellite, <span className="text-blue-400">@NASAMoon</span> Happy <span className="text-blue-400">#InternationalMoonDay</span>! 🌖</p>
   
                     <img src="/moonday.jpg" className="mt-3 w-[95%] h-auto rounded-2xl"/>
                     <div className="inline-flex justify-between  ">
                         <div className="sm:w-32 w-[70px] p-3"><ChatIcon    className="text-gray-400 w-7 h-7"/></div>
                         <div className="sm:w-32 w-[70px] p-3"><RefreshIcon className="text-gray-400 w-7 h-7"/></div>
                         <div className="sm:w-32 w-[70px] p-3"><HeartIcon   className="text-gray-400 w-7 h-7"/></div>
                         <div className="     p-3"><UploadIcon  className="text-gray-400 w-7 h-7"/></div>
                     </div>
                  
            </div>
      
        </div>
        </>
    )
    
}
export default AddTweets