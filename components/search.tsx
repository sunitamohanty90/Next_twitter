
import {SearchIcon} from "@heroicons/react/outline";
import React from "react";
function Search() {
    return(
        <div className="hidden xl:col-span-3 md:col-span-2 mt-2 px-2 md:inline mx-4">
        
        <div className="hidden lg:inline-flex mt-2  items-center  bg-gray-100 p-3 rounded-full ">
          <SearchIcon className="h-6 w-6 mx-5" />
          <input
            type="text"
            placeholder="search twitter"
            className=" outline-none bg-transparent"
          />
        </div>
  
       
      </div>
    )
    
}
export default Search