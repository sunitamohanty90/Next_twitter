import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    MailIcon,
    HomeIcon,
    DotsCircleHorizontalIcon,
    UserIcon,
    UserCircleIcon,
    
} from "@heroicons/react/outline";

function Navbar() {
    const router = useRouter();
    return (
        <div className="hidden xl:col-span-2 sm:flex flex-col items-center px-4 xl:items-start min-h-screen ">
            <div className="xl:justify-start">
                <img className="m-3 h-10 w-10 " src="/twitter.png" alt="twitter logo" />

                <Link href="/home">
                    <a className="   flex cursor-pointer max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 ">
                        <HomeIcon className="h-7 w-7" />
                        <p className="hidden  text-base font-light xl:inline-flex  lg:text-xl">Home</p>
                    </a>
                </Link>


                <Link href="/explore" >
                    <a className=" flex cursor-pointer max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 ">
                        <HashtagIcon className="h-7 w-7" />
                        <p className="hidden  text-base font-light xl:inline-flex  lg:text-xl">Explore</p>
                    </a>
                </Link>
                <Link href="/notifications" >
                    <a className=" flex cursor-pointer max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 ">
                        <BellIcon className="h-7 w-7" />
                        <p className="hidden  text-base font-light xl:inline-flex  lg:text-xl">Notifications</p>
                    </a>
                </Link>
                <Link href="/messages" >
                    <a className=" flex cursor-pointer max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 ">
                        <MailIcon className="h-7 w-7" />
                        <p className="hidden  text-base font-light xl:inline-flex  lg:text-xl">Messages</p>
                    </a>
                </Link>
                <Link href="/bookmarks" >
                    <a className=" flex cursor-pointer max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 ">
                        <BookmarkIcon className="h-7 w-7" />
                        <p className="hidden  text-base font-light xl:inline-flex  lg:text-xl">Bookmarks</p>
                    </a>
                </Link>
                <Link href="/lists" >
                    <a className=" flex cursor-pointer max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 ">
                        <CollectionIcon className="h-7 w-7" />
                        <p className="hidden  text-base font-light xl:inline-flex  lg:text-xl">Lists</p>
                    </a>
                </Link>
                <Link href="/profile" >
                    <a className=" flex cursor-pointer max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 ">
                        <UserIcon className="h-7 w-7" />
                        <p className="hidden  text-base font-light xl:inline-flex  lg:text-xl">Profile</p>
                    </a>
                </Link>
                <Link href="/more" >
                    <a className=" flex cursor-pointer max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 ">
                        <DotsCircleHorizontalIcon className="h-7 w-7" />
                        <p className="hidden  text-base font-light xl:inline-flex  lg:text-xl">More</p>
                    </a>
                </Link>
                <Link href="#">
               
                <button className="hidden xl:inline ml-auto bg-blue-500 text-white my-2 py-1 rounded-full w-52 h-12 ">Tweet</button>
                
                </Link>
               

            </div>
            <div className="absolute insert-x-0 bottom-0 ">
            <Link href="/profile" >
                    <a className=" flex cursor-pointer max-w-fit items-center space-x-2 px-4 py-3 rounded-full ">
                        <UserCircleIcon className="h-7 w-7 text-gray-400 "/>
                        <h1 className=" hidden xl:inline text-xl font-bold text-center">Profile</h1>
                    </a>
                </Link>
            </div>
        </div>


    )
}
export default Navbar;