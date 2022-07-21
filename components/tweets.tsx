import Link from "next/link"
import React from "react"
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
  SparklesIcon,
  ChartBarIcon,
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  SearchIcon,
  
} from "@heroicons/react/outline";
import AddTweets from "./dummytweets";


function Tweets() {
    return(
        <div className="xl:col-span-4  md:col-span-7 col-span-9 border-x  overflow-y-auto  relative  ">
                            <div className="flex justify-between mt-4  sticky top-0">
                                 <div className="inline-flex">
                                   <Link href="/profile" className=" " ><img src="profile.png" className="sm:hidden rounded-full h-12 w-12"/></Link>
                                   <h1 className="ml-5  text-xl font-bold text-center  top-0 flex items-center">Home</h1>
                                 </div>
                                 <SparklesIcon className="w-6 h-6 mr-5 top-0 mt-3 "/>
              
             
                            </div>
                            <div className="hidden sm:flex mt-4 ml-4 space-x-6 ">
                                    <Link href="/profile" ><img src="profile.png" className="rounded-full h-14 w-14"/></Link>
                                    <p className="  flex items-center text-base text-gray-400 font-light md:inline-flex  lg:text-xl">What's happening ?</p>
                            </div>
                            <div className="hidden md:inline-flex  ml-24 mt-4 ">
                                   <div className="inline-flex space-x-3 items-center ">
                                       <PhotographIcon className="w-6 h-6 text-blue-400"/>
                                       <SearchCircleIcon className="w-6 h-6 text-blue-400"/>
                                       <ChartBarIcon className="w-6 h-6 text-blue-400"/>
                                       <EmojiHappyIcon className="w-6 h-6 text-blue-400"/>
                                       <CalendarIcon className="w-6 h-6 text-blue-400"/>
                                       <LocationMarkerIcon className="w-6 h-6 text-blue-400"/>
                                   </div>
                             
                                   <div className=" absolute inset-y-0 right-0 mt-32 mr-3">
                                       <button className="text-white bg-blue-300 rounded-full w-20 h-9  ">Tweet</button>
                                   </div>
                              
                             </div>
                                     {/* midddle */}
                                      <div className="border-t mt-6 ">
                                       <AddTweets/>
                                       
                                      </div>

                                      {/* last */}
                                      <div className="md:hidden absolute inset-x-0 bottom-0  border-y sm:sticky ">
                                          <div className="h-16 flex items-center justify-between">
                                             <a className="p-5"> <HomeIcon className="w-7 h-7 "/></a>
                                             <a className="p-5"> <SearchIcon className="w-7 h-7 "/></a>
                                             <a className="p-5"> <BellIcon className="w-7 h-7 "/></a>
                                             <a className="p-5"> <MailIcon className="w-7 h-7 "/></a>
                                          </div>
          
                                      </div>
        
  
          </div>
    )
    
}
export default Tweets