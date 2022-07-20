import Link from "next/link"
import React from "react"
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
  SparklesIcon,
} from "@heroicons/react/outline";


function Tweets() {
    return(
        <div className="col-span-4  border-x  overflow-auto">
            <div className="flex justify-between  mt-4  sticky top-0">
                
                <h1 className="ml-5  text-xl font-bold text-center  top-0">Home</h1>
              
                <SparklesIcon className="w-6 h-6 mr-5 top-0"/>
              
             
            </div>
            <div className="flex mt-4 ml-4 space-x-6 ">
                    <Link href="/profile" ><img src="profile.png" className="rounded-full h-14 w-14"/></Link>
                    <p className="  flex items-center text-base text-gray-400 font-light md:inline-flex  lg:text-xl">What's happening ?</p>
            </div>
            <div className="flex justify-between ml-24 mt-4 ">
              <div className="inline-flex space-x-3 items-center ">
                  <PhotographIcon className="w-6 h-6 text-blue-400"/>
                  <SearchCircleIcon className="w-6 h-6 text-blue-400"/>
                  
                  <EmojiHappyIcon className="w-6 h-6 text-blue-400"/>
                  <CalendarIcon className="w-6 h-6 text-blue-400"/>
                  <LocationMarkerIcon className="w-6 h-6 text-blue-400"/>
              </div>
              <div className="mr-5">
                  <button className="text-white bg-blue-300 rounded-full w-20 h-9  ">Tweet</button>
              </div>
            </div>
             <div className="mt-6 border-y">
               
             </div>
        
  
      </div>
    )
    
}
export default Tweets