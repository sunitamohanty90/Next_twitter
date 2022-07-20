
import {SearchIcon} from "@heroicons/react/outline";
import React from "react";
function Search() {
    return(
        <div className=" col-span-3 mt-2 px-2 inline mx-4">
        
        <div className="mt-2 flex items-center  bg-gray-100 p-3 rounded-full ">
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